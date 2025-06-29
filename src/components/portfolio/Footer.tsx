
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IN</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl">Iasmim Nunes</span>
                <span className="text-sm text-gray-400 -mt-1">Desenvolvedora</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando ideias em experiências digitais excepcionais.
            </p>
          </div>

          {/* Made with love */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>e</span>
              <Code className="h-4 w-4 text-blue-400" />
              <span>e muito</span>
              <Coffee className="h-4 w-4 text-yellow-600" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Desenvolvido com React, TypeScript e Tailwind CSS
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Iasmim Nunes. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Obrigada por visitar meu portfólio! ✨
            </p>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 sm:mb-0">
              <span>Última atualização: Dezembro 2024</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
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
