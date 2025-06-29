
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Disponível para novos projetos
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Olá, eu sou
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Iasmim Nunes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Desenvolvedora criativa e apaixonada por transformar ideias em experiências digitais excepcionais.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                Ver Projetos
              </Button>
              <Button variant="outline" size="lg" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg">
                Entre em Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-gray-500 text-sm">Me encontre em:</span>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
                  <Github className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
                  <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
                  <Mail className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=800&q=80"
                alt="Iasmim Nunes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
