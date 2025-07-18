export function ExamesRadiologicosSobMedida() {
  return (
    <section className="bg-[#111827]">
      <div className="container mx-auto sm:px-32 py-16 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl max-w-3xl mx-auto">
            Exames radiológicos sob medida para o seu consultório, seja qual for
            sua especialidade
          </h2>
          <p className="mt-4 text-lg text-gray-300 px-2 sm:px-10">
            Nossa clínica de radiologia odontológica está pronta para atender
            você, dentista, oferecendo exames essenciais para todas as áreas da
            odontologia, com imagens precisas e laudos rápidos. Equipados com o
            Morita Veraview X800, garantimos qualidade superior para apoiar seu
            diagnóstico e planejamento clínico.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <h3 className="mt-2 text-xl font-semibold text-white">
              <span className="text-2xl text-green-500">✔</span> Panorâmica
              odontológica
            </h3>
            <p className="mt-2 text-gray-400">
              Perfeita para dentistas clínicos gerais, permitindo uma visão
              completa da estrutura bucal para avaliações iniciais, prevenção e
              planejamento de tratamentos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="mt-2 text-xl font-semibold text-white">
              <span className="text-2xl text-green-500">✔</span> Tomografia
              computadorizada
            </h3>
            <p className="mt-2 text-gray-400">
              Imagens 3D detalhadas essenciais para: Implantodontistas,
              Cirurgiões, Endodontistas, Ortodontistas e Periodontistas.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="mt-2 text-xl font-semibold text-white">
              <span className="text-2xl text-green-500">✔</span> Cefalometria
            </h3>
            <p className="mt-2 text-gray-400">
              Exame fundamental para ortodontistas na avaliação do perfil ósseo
              e planejamento de aparelhos ortodônticos.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Atendemos:
          </h3>
          <div className="mt-8 flex justify-center">
            <div className="text-left grid grid-cols-[40%_40%] sm:grid-cols-[48%_48%] gap-8 text-xs md:text-base mx-auto sm:px-8 w-[90%] sm:w-full justify-center tracking-tighter sm:tracking-normal border-b-white/20 border-b pb-14">
              <ul className="text-lg text-gray-300 flex flex-col gap-y-2">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                  Dentistas clínicos
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                  Implantodontistas
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                  Cirurgiões bucomaxilofaciais
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                  Ortodontistas
                </li>
              </ul>
              <ul className="text-lg text-gray-300 flex flex-col gap-y-2">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                  Endodontistas
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                  Periodontistas
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                  Outros que trabalham com casos de DTM
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="/whatsapp"
              target="_blank"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-colors duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
