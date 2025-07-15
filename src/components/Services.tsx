
import { Home, Bed, Shirt, Briefcase, Utensils, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Cozinhas Planejadas",
      description: "Projetos funcionais e modernos que otimizam cada centímetro do seu espaço culinário.",
      features: ["Medidas personalizadas", "Materiais resistentes", "Design funcional"]
    },
    {
      icon: Bed,
      title: "Dormitórios Completos",
      description: "Quartos planejados com guarda-roupas, camas e criados-mudos sob medida.",
      features: ["Organização inteligente", "Aproveitamento total", "Estilo personalizado"]
    },
    {
      icon: Shirt,
      title: "Closets e Vestidores",
      description: "Espaços organizados e elegantes para suas roupas e acessórios.",
      features: ["Divisórias inteligentes", "Iluminação integrada", "Acabamento premium"]
    },
    {
      icon: Briefcase,
      title: "Home Office",
      description: "Escritórios planejados para máxima produtividade e conforto no trabalho.",
      features: ["Ergonomia avançada", "Organização completa", "Design profissional"]
    },
    {
      icon: Home,
      title: "Salas de Estar",
      description: "Móveis planejados que criam ambientes acolhedores e funcionais.",
      features: ["Entretenimento integrado", "Conforto garantido", "Estilo único"]
    },
    {
      icon: BookOpen,
      title: "Bibliotecas e Estudos",
      description: "Espaços de leitura e estudo com organização inteligente.",
      features: ["Prateleiras ajustáveis", "Iluminação adequada", "Ambiente inspirador"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-wood-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-wood-900 mb-4">
            Nossos <span className="text-wood-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-wood-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em móveis planejados para todos os ambientes da sua casa ou empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-wood-200 hover:border-wood-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-wood-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-wood-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-wood-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-wood-600">
                      <div className="w-2 h-2 bg-wood-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-wood-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-wood-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-wood-700 mb-6">
              Criamos soluções personalizadas para qualquer ambiente. Entre em contato e vamos conversar sobre seu projeto.
            </p>
            <button className="bg-wood-600 hover:bg-wood-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
