import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Ajuste o caminho se necessário

interface FAQItem {
  id: string;
  question: string;
  answer: string | JSX.Element;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "Sobre a Digital X",
    items: [
      {
        id: "sobre-1",
        question: "O que é a Digital X?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            A Digital X é um centro moderno e especializado em radiologia
            odontológica digital. Nosso objetivo é oferecer exames de imagem de
            alta qualidade para auxiliar no diagnóstico preciso e seguro em
            diversas especialidades da odontologia.
          </p>
        ),
      },
      {
        id: "sobre-2",
        question: "Quais são os diferenciais da Digital X?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Nosso principal diferencial é a tecnologia de ponta que utilizamos,
            incluindo o equipamento I-CAT Next Generation para tomografias Cone
            Beam. Isso nos permite gerar imagens de alta definição com baixa
            exposição à radiação, garantindo a segurança e a precisão do seu
            diagnóstico. Além disso, priorizamos a agilidade, a biossegurança e
            a entrega de laudos confiáveis.
          </p>
        ),
      },
    ],
  },
  {
    title: "Exames Oferecidos",
    items: [
      {
        id: "exames-1",
        question:
          "Quais tipos de exames radiológicos odontológicos a Digital X oferece?",
        answer: (
          <div className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>Oferecemos uma ampla gama de exames, incluindo:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                Radiografias intraorais: Periapicais, interproximais e oclusais.
              </li>
              <li>Radiografias extraorais: Panorâmicas e telerradiografias.</li>
              <li>
                Tomografia Computadorizada Cone Beam (CBCT): Realizada com o
                moderno equipamento I-CAT Next Generation, que proporciona
                imagens tridimensionais detalhadas da face e da boca.
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "exames-2",
        question: "O que é a Tomografia Cone Beam e qual sua importância?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            A Tomografia Cone Beam (CBCT) é um exame tridimensional que permite
            a visualização detalhada de estruturas ósseas e tecidos da região
            bucal e maxilofacial. É fundamental para diagnósticos mais precisos
            em diversas áreas, como implantodontia, cirurgia, ortodontia e
            endodontia, por oferecer uma visão completa que as radiografias
            bidimensionais não conseguem.
          </p>
        ),
      },
      {
        id: "exames-3",
        question: "Os exames digitais são seguros?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Sim, os exames digitais são extremamente seguros. A tecnologia
            digital reduz significativamente a exposição à radiação em
            comparação com os métodos tradicionais, tornando o processo mais
            seguro para os pacientes.
          </p>
        ),
      },
    ],
  },
  {
    title: "Agendamento e Preparo",
    items: [
      {
        id: "agendamento-1",
        question: "Como faço para agendar um exame na Digital X?",
        answer: (
          <div className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              Você pode agendar seu exame de forma rápida e conveniente. Temos
              algumas opções para você:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                Telefone: Ligue para nosso número de atendimento e converse com
                nossa equipe.
              </li>
              <li>WhatsApp: Envie uma mensagem para nosso WhatsApp.</li>
              <li>
                Site: Preencha o formulário de agendamento em nosso site, e
                entraremos em contato. Você encontra todos os nossos contatos na
                página principal.
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "agendamento-2",
        question: "Preciso de pedido do dentista para realizar exames?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Sim, para a sua segurança e para garantir que o exame correto seja
            realizado, é imprescindível apresentar o pedido do seu dentista (ou
            médico, se for o caso).
          </p>
        ),
      },
      {
        id: "agendamento-3",
        question: "Quais informações preciso ter em mãos para agendar?",
        answer: (
          <div className="space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>Para facilitar o agendamento, tenha em mãos:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>O pedido do seu dentista com o tipo de exame solicitado.</li>
              <li>Seu nome completo e data de nascimento.</li>
              <li>
                Seu telefone e e-mail para contato e envio de informações.
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "agendamento-4",
        question: "Existe algum preparo especial para os exames?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Na maioria dos exames, não há preparo especial. No entanto, é
            importante informar-nos sobre qualquer piercing, joia ou aparelho
            ortodôntico móvel que você utilize na região da cabeça e pescoço,
            pois eles podem interferir na qualidade da imagem. Para alguns
            exames específicos, como as tomografias, podemos dar orientações
            adicionais no momento do agendamento.
          </p>
        ),
      },
      {
        id: "agendamento-5",
        question: "A Digital X atende convênios?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            No momento, a Digital X não trabalha com convênios diretos. Nossos
            exames são particulares. No entanto, emitimos notas fiscais para que
            você possa solicitar reembolso junto ao seu convênio, caso ele
            ofereça essa opção. Sugerimos que verifique com sua operadora de
            plano de saúde sobre as condições de reembolso.
          </p>
        ),
      },
      {
        id: "agendamento-6",
        question: "Quais são as formas de pagamento aceitas?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Aceitamos diversas formas de pagamento para sua comodidade:
            dinheiro, cartão de débito e cartão de crédito.
          </p>
        ),
      },
    ],
  },
  {
    title: "Resultados e Laudos",
    items: [
      {
        id: "resultados-1",
        question: "Quando receberei o resultado do meu exame?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            O prazo para a entrega dos resultados pode variar de acordo com o
            tipo de exame e a complexidade da análise. Nossa equipe informará o
            prazo estimado no momento do agendamento ou da realização do exame.
            Geralmente, os laudos digitais são liberados em poucos dias úteis.
          </p>
        ),
      },
      {
        id: "resultados-2",
        question:
          "Quem é o responsável por interpretar os exames e emitir os laudos?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Nossos exames são interpretados e os laudos são emitidos por
            profissionais especializados em radiologia odontológica, garantindo
            a confiabilidade e precisão das informações.
          </p>
        ),
      },
      {
        id: "resultados-3",
        question: "Como as imagens e os laudos são entregues?",
        answer: (
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Priorizamos a agilidade e a sustentabilidade! As imagens e os laudos
            são disponibilizados digitalmente através de um link seguro, enviado
            para o seu e-mail ou WhatsApp. Assim, você e seu dentista podem
            acessá-los de forma rápida e conveniente, sem a necessidade de
            impressões. Se precisar de uma cópia impressa, por favor, nos avise
            com antecedência.
          </p>
        ),
      },
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <header className="text-center mb-10 md:mb-14">
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre nossos exames, sem complicação!
          </p>
        </header>

        <main className="space-y-10">
          {faqSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6">
                {section.title}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {section.items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-white dark:bg-slate-800 shadow-sm rounded-lg"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left text-base md:text-lg font-medium text-slate-900 dark:text-slate-100 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pt-0 pb-4 text-sm">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </main>

        <footer className="text-center mt-12 md:mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Ainda tem dúvidas? Fale com a gente! Estamos à disposição para
            ajudar.
          </p>
        </footer>
      </div>
    </div>
  );
}
