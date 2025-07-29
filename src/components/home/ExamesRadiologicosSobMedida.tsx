export function ExamesRadiologicosSobMedida() {
  return (
    <section className="bg-[#111827]">
      <div className="container mx-auto py-16 sm:py-32">
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
      </div>
    </section>
  );
}
