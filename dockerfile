# Estágio de Build
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para instalar as dependências
COPY package.json yarn.lock* package-lock.json* ./

# Instala as dependências do projeto.
# Usa yarn se yarn.lock existir, caso contrário, usa npm.
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; else npm ci; fi

# Copia todo o restante do código da aplicação para o diretório de trabalho
COPY . .

# Garante que o usuário 'nextjs' exista com um ID de usuário específico.
# Isso é uma boa prática de segurança para evitar rodar como root.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Define as permissões para os arquivos estáticos e de cache do Next.js
# Isso é crucial para que o Next.js possa construir corretamente os arquivos
RUN mkdir .next
RUN chown -R nextjs:nodejs .next

# Constrói a aplicação Next.js para produção
# 'standalone' otimiza o build para Docker, criando uma pasta 'standalone' no .next
RUN npm run build

# Otimiza o tamanho da imagem, removendo dependências de desenvolvimento
# e apenas mantendo as essenciais para a execução em produção.
# Certifique-se de que o npm run build já foi executado.
RUN if [ -f yarn.lock ]; then yarn install --production --ignore-scripts --prefer-offline; else npm ci --omit=dev; fi

# Estágio de Produção
FROM node:20-alpine AS runner

# Define as mesmas configurações de usuário e grupo do estágio de build
# Isso garante consistência e segurança ao longo do processo.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Define o diretório de trabalho para a aplicação
WORKDIR /app

# Copia os arquivos de ambiente de produção (se existirem)
# Certifique-se de que estes arquivos NÃO contenham segredos sensíveis!
# Para segredos, use variáveis de ambiente do Docker ou secrets orchestration.
COPY --from=builder --chown=nextjs:nodejs /app/.env.production ./.env.production || true

# Copia o bundle de build otimizado e os módulos node_modules do estágio de build.
# A pasta 'standalone' é o que torna o build Next.js otimizado para Docker.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Expõe a porta que o Next.js usa (padrão é 3000)
EXPOSE 3000

# Define a variável de ambiente para que o Next.js saiba que está em produção
ENV NODE_ENV=production

# Define o usuário que irá rodar a aplicação. É uma prática de segurança crucial.
USER nextjs

# Comando para iniciar a aplicação Next.js em produção
# O Next.js com 'output: "standalone"' gera um script de inicialização diretamente no root.
CMD ["node", "server.js"]