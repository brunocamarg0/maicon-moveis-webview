
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Acredito em escrever código limpo, eficiente e bem documentado."
    },
    {
      icon: Palette,
      title: "Design Intuitivo",
      description: "Foco em criar interfaces bonitas e funcionais para os usuários."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização e performance são prioridades em todos os projetos."
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Amo o que faço e isso reflete na qualidade do meu trabalho."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900">
                Sobre 
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Mim</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou uma desenvolvedora apaixonada por tecnologia e design, com experiência em criar 
                soluções digitais inovadoras que conectam pessoas e facilitam o dia a dia.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web, 
                e hoje transformo ideias complexas em experiências digitais simples e elegantes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="font-bold text-3xl text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projetos Concluídos</div>
              </div>
              <div>
                <div className="font-bold text-3xl text-gray-900 mb-2">3+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="font-bold text-3xl text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Satisfação dos Clientes</div>
              </div>
              <div>
                <div className="font-bold text-3xl text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Suporte Disponível</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
