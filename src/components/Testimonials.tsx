
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Designer de Interiores",
      rating: 5,
      comment: "Trabalho excepcional! O Maicon e sua equipe superaram todas as minhas expectativas. A cozinha ficou perfeita, funcional e linda. Recomendo de olhos fechados!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Empresário",
      rating: 5,
      comment: "Profissionalismo do início ao fim. Prazo cumprido rigorosamente e qualidade impecável. O closet planejado transformou completamente nosso quarto. Muito satisfeito!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Ana Carolina",
      role: "Arquiteta",
      rating: 5,
      comment: "Parceria perfeita! Trabalho em vários projetos com o Maicon e sempre entrega móveis de altíssima qualidade. Atendimento personalizado e resultados incríveis.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      role: "Advogado",
      rating: 5,
      comment: "Investir nos móveis planejados foi a melhor decisão. Aproveitou cada espaço da nossa casa de forma inteligente. Qualidade superior e preço justo.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Fernanda Lima",
      role: "Médica",
      rating: 5,
      comment: "Home office dos sonhos! Ambiente funcional e elegante. O Maicon entendeu perfeitamente minhas necessidades e criou um espaço perfeito para trabalhar.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Roberto Costa",
      role: "Contador",
      rating: 5,
      comment: "Reforma completa da casa com móveis planejados. Resultado surpreendente! Organização, funcionalidade e beleza em cada ambiente. Parabéns pelo trabalho!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-wood-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-wood-900 mb-4">
            O que Nossos <span className="text-wood-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-wood-700 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos de quem confiou em nosso trabalho.
          </p>
        </div>

        {/* Average Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-wood-200">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-wood-900">4.9</span>
            <span className="text-wood-600">de 5 estrelas</span>
            <span className="text-wood-500">•</span>
            <span className="text-wood-600">150+ avaliações</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 border-wood-200 hover:border-wood-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-wood-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-wood-700 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-wood-900">{testimonial.name}</div>
                    <div className="text-sm text-wood-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-wood-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-wood-900 mb-4">
              Que tal fazer parte dessa lista?
            </h3>
            <p className="text-wood-700 mb-6">
              Solicite seu orçamento gratuito e descubra como podemos transformar seus ambientes.
            </p>
            <button className="bg-wood-600 hover:bg-wood-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
