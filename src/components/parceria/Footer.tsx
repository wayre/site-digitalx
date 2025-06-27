const Footer = () => {
  return (
    <footer className="bg-digital-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-medical-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DX</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-white">
                Digital X
              </span>
            </div>
            <p className="font-opensans text-gray-300 leading-relaxed">
              Onde Tecnologia Encontra a Perfeição Clínica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg text-white mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicos"
                  className="font-opensans text-gray-300 hover:text-medical-green transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="font-opensans text-gray-300 hover:text-medical-green transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#parceria"
                  className="font-opensans text-gray-300 hover:text-medical-green transition-colors"
                >
                  Parceria
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="font-opensans text-gray-300 hover:text-medical-green transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg text-white mb-4">
              Contato
            </h3>
            <div className="space-y-2 font-opensans text-gray-300">
              <p>📍 R. Treze de Junho, 499 – Centro</p>
              <p>Campo Grande/MS</p>
              <p>📞 (67) 3028-2890</p>
              <p>📧 parcerias@digitalx.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-opensans text-gray-400 text-sm">
              © 2025 Digital X. Todos os direitos reservados.
            </p>
            <p className="font-opensans text-gray-400 text-sm">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
