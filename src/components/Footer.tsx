import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-base bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-[31%_37%_31%] gap-1 sm:gap-8 mb-12">
          {/* Sobre */}
          <div className="w-5/6 mx-auto md:w-full">
            <h3 className="footer-heading">Sobre a Digital X</h3>
            <p className="text-gray-400 mb-4">
              Referência em exames radiológicos odontológicos, oferecendo
              tecnologia de ponta e atendimento humanizado para pacientes e
              profissionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="w-5/6 sm:w-[90%] mx-auto md:mx-0 lg:mx-auto grid grid-cols-2  gap-1">
            <div>
              <h3 className="footer-heading">Links Rápidos</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#home" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="footer-link">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#exames" className="footer-link">
                    Exames
                  </a>
                </li>
                <li>
                  <a href="#convenios" className="footer-link">
                    Convênios
                  </a>
                </li>
                <li>
                  <a href="#dentista" className="footer-link">
                    Área do Dentista
                  </a>
                </li>
                <li>
                  <a href="#contato" className="footer-link">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Exames */}
            <div>
              <h3 className="footer-heading">Nossos Exames</h3>
              <ul
                className="space-y-1
              "
              >
                <li>
                  <a href="#exames" className="footer-link">
                    Tomografia Computadorizada
                  </a>
                </li>
                <li>
                  <a href="#exames" className="footer-link">
                    Radiografia Panorâmica
                  </a>
                </li>
                <li>
                  <a href="#exames" className="footer-link">
                    Radiografia Cefalométrica
                  </a>
                </li>
                <li>
                  <a href="#exames" className="footer-link">
                    Radiografia Periapical
                  </a>
                </li>
                <li>
                  <a href="#exames" className="footer-link">
                    Radiografia Interproximal
                  </a>
                </li>
                <li>
                  <a href="#exames" className="footer-link">
                    Documentação Ortodôntica
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contato */}
          <div className="w-5/6 mx-auto md:w-full">
            <h3 className="footer-heading">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-digitalx-400 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">
                  R. Treze de Junho, 499 - Campo Grande/MS
                </span>
              </li>
              <li className="flex">
                <Phone className="text-digitalx-400 mr-3 h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+556730282890"
                  className="text-gray-400 hover:text-digitalx-400 transition-colors"
                >
                  (67) 3028-2890
                </a>
              </li>
              <li className="flex">
                <Mail className="text-digitalx-400 mr-3 h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:contato@digitalx.com.br"
                  className="text-gray-400 hover:text-digitalx-400 transition-colors"
                >
                  contato@digitalx.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Digital X. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
