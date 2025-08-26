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
    title: "",
    items: [
      {
        id: "agendamento-1",
        question: "Como faço para agendar um exame na Digital X?",
        answer: (
          <div className="space-y-2 leading-relaxed">
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
          <p className="leading-relaxed">
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
          <div className="space-y-2 leading-relaxed">
            <p>Para facilitar o agendamento, tenha em mãos:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>O pedido do seu dentista com o exame solicitado.</li>
              <li>Nome do seu convênio.</li>
            </ul>
          </div>
        ),
      },
      {
        id: "agendamento-4",
        question: "Existe algum preparo especial para os exames?",
        answer: (
          <div>
            <p>Para ter um exame de qualidade:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                Retirar brincos, correntes, piercings e outros objetos metálicos
                na região de cabeça e pescoço;
              </li>
              <li>
                Evitar uso de vestuário com botões e feches metálicos que fiquem
                na região do pescoço;
              </li>
              <li>
                Avisar o técnico sobre o uso de próteses ou aparelhos
                removíveis;
              </li>
              <li>
                Avisar o técnico sobre machucado ou cirurgia recentes na região
                de boca e lábios;
              </li>
              <li>
                Avisar a recepcionista e o técnico sobre uma possível gravidez
                ou os meses de gestação.
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "agendamento-5",
        question: "Quais são as formas de pagamento aceitas?",
        answer: (
          <p className="leading-relaxed">
            Aceitamos diversas formas de pagamento para sua comodidade:
            dinheiro, Pix, cartão de débito e cartão de crédito.
          </p>
        ),
      },
      {
        id: "agendamento-6",
        question: "Quando receberei o resultado do meu exame?",
        answer: (
          <p className="leading-relaxed">
            O prazo para a entrega dos resultados pode variar de acordo com o
            tipo de exame e a complexidade da análise. Nossa equipe informará o
            prazo estimado no momento do agendamento ou da realização do exame.
          </p>
        ),
      },
      {
        id: "agendamento-7",
        question:
          "Quem é o responsável por interpretar os exames e emitir os laudos?",
        answer: (
          <p className="leading-relaxed">
            Nossos exames são interpretados e os laudos são emitidos por
            profissionais especializados em radiologia odontológica, garantindo
            a confiabilidade e precisão das informações.
          </p>
        ),
      },
      {
        id: "agendamento-8",
        question: "Como as imagens e os laudos são entregues?",
        answer: (
          <p className="leading-relaxed">
            Priorizamos a agilidade e a sustentabilidade! As imagens e os laudos
            são disponibilizados digitalmente através de um link seguro entregue
            na recepção. Assim, você e seu dentista podem acessá-los de forma
            rápida e conveniente, sem a necessidade de impressões. Se precisar
            de uma cópia impressa, por favor, nos avise com antecedência.
          </p>
        ),
      },
    ],
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen  dark:bg-slate-900 py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <header className="text-center md:text-left mb-10 md:mb-14">
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre nossos exames, sem complicação!
          </p>
        </header>

        <main className="space-y-10">
          {faqSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                {section.title}
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {section.items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="bg-digitalx-900 text-white shadow-sm rounded-lg"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left text-base md:text-lg hover:no-underline font-bold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pt-0 pb-4 text-sm">
                      <div className="bg-digitalx-800 p-4 rounded-lg bg-opacity-15">
                        {item.answer}
                      </div>
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
