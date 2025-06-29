
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-wood-50 via-white to-wood-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-wood-900 leading-tight">
                Móveis Planejados
                <span className="block text-wood-gradient">Sob Medida</span>
              </h1>
              <p className="text-xl text-wood-700 leading-relaxed max-w-lg">
                Transforme seus ambientes com móveis únicos, projetados especialmente para o seu espaço e estilo de vida.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-wood-200 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-wood-700" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-wood-900">500+</div>
                  <div className="text-sm text-wood-600">Projetos Realizados</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-wood-200 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-wood-700" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-wood-900">15+</div>
                  <div className="text-sm text-wood-600">Anos de Experiência</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-wood-200 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-wood-700" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-wood-900">100%</div>
                  <div className="text-sm text-wood-600">Satisfação</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-wood-600 hover:bg-wood-700 text-white px-8 py-4 text-lg">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-wood-300 text-wood-700 hover:bg-wood-50 px-8 py-4 text-lg">
                Ver Projetos
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="aspect-[4/3] bg-wood-200 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
                alt="Ambiente moderno com móveis planejados"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-wood-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-green-600 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-wood-900">4.9/5</div>
                  <div className="text-sm text-wood-600">Avaliação dos Clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
