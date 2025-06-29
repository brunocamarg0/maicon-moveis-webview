
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wood-950 text-wood-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-wood-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">MM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl text-white">Maicon Melo</span>
                <span className="text-sm text-wood-400 -mt-1">Móveis Planejados</span>
              </div>
            </div>
            <p className="text-wood-300 leading-relaxed mb-6 max-w-md">
              Há mais de 15 anos transformando ambientes com móveis planejados de alta qualidade. 
              Sua satisfação é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-wood-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-wood-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-wood-800 hover:bg-wood-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-bold text-xl text-white mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Cozinhas Planejadas',
                'Dormitórios Completos',
                'Closets e Vestidores',
                'Home Office',
                'Salas de Estar',
                'Projetos Comerciais'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-wood-100 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-bold text-xl text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-wood-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-wood-100">(11) 99999-9999</p>
                  <p className="text-sm text-wood-400">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-wood-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-wood-100">contato@maiconmelomoveis.com</p>
                  <p className="text-sm text-wood-400">Resposta rápida</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-wood-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-wood-100">Rua dos Móveis, 123</p>
                  <p className="text-sm text-wood-400">Centro - São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wood-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-wood-400 text-sm">
              © 2024 Maicon Melo Móveis. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-wood-400 hover:text-wood-200 text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-wood-400 hover:text-wood-200 text-sm transition-colors duration-300">
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
