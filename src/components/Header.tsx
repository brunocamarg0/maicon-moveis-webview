
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-wood-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl text-wood-800">Maicon Melo</span>
              <span className="text-sm text-wood-600 -mt-1">Móveis Planejados</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-wood-700 hover:text-wood-900 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-wood-300 text-wood-700 hover:bg-wood-50">
              <motion.span whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Phone className="h-4 w-4 mr-2" />
              </motion.span>
              Ligar
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
              <motion.span whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <MessageCircle className="h-4 w-4 mr-2" />
              </motion.span>
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-wood-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.85, rotate: 15 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            {isMenuOpen ? (
              <motion.span whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-wood-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-wood-700 hover:text-wood-900 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-wood-300 text-wood-700 hover:bg-wood-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
