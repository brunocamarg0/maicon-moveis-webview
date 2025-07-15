
import { Check, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    "Projetos 100% personalizados",
    "Materiais de primeira qualidade",
    "Equipe especializada e experiente",
    "Entrega no prazo garantida",
    "Pós-venda com garantia completa",
    "Atendimento personalizado"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-wood-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80"
                    alt="Profissional trabalhando"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-wood-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&q=80"
                    alt="Ambiente de trabalho moderno"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[3/4] bg-wood-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&q=80"
                    alt="Móveis planejados modernos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-wood-900">
                Sobre a 
                <span className="block text-wood-gradient">Maicon Melo Móveis</span>
              </h2>
              <p className="text-lg text-wood-700 leading-relaxed">
                Com mais de 15 anos de experiência no mercado de móveis planejados, 
                nossa empresa se dedica a criar ambientes únicos que refletem a 
                personalidade e necessidades de cada cliente.
              </p>
              <p className="text-lg text-wood-700 leading-relaxed">
                Especializamos em projetos residenciais e comerciais, sempre 
                priorizando a qualidade dos materiais, o acabamento impecável 
                e a satisfação total dos nossos clientes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-wood-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-wood-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-wood-700" />
                </div>
                <div className="font-bold text-2xl text-wood-900">500+</div>
                <div className="text-sm text-wood-600">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-wood-700" />
                </div>
                <div className="font-bold text-2xl text-wood-900">15+</div>
                <div className="text-sm text-wood-600">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6 text-wood-700" />
                </div>
                <div className="font-bold text-2xl text-wood-900">100%</div>
                <div className="text-sm text-wood-600">No Prazo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
