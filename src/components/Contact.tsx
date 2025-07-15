
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      subtext: "Ligue agora e fale conosco"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 99999-9999",
      subtext: "Atendimento rápido e personalizado"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@maiconmelomoveis.com",
      subtext: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua dos Móveis, 123 - Centro",
      subtext: "São Paulo - SP"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      subtext: "Sábado: 8h às 12h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-wood-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-wood-800 to-wood-900" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Entre em <span className="text-wood-300">Contato</span>
          </h2>
          <p className="text-xl text-wood-200 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar seus ambientes? Nossa equipe está aqui para ajudar você a realizar o projeto dos seus sonhos.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Contact Form */}
          <Card className="bg-white shadow-2xl border-wood-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-wood-900 mb-6">
                Solicite seu Orçamento Gratuito
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-wood-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-wood-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-2">
                    Tipo de Projeto
                  </label>
                  <select className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent">
                    <option>Selecione o tipo de projeto</option>
                    <option>Cozinha Planejada</option>
                    <option>Dormitório Completo</option>
                    <option>Closet/Vestidor</option>
                    <option>Home Office</option>
                    <option>Sala de Estar</option>
                    <option>Casa Completa</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wood-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent resize-none"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  />
                </div>

                <Button className="w-full bg-wood-600 hover:bg-wood-700 text-white py-4 text-lg">
                  Enviar Solicitação
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-wood-200">
                <p className="text-sm text-wood-600 text-center">
                  Ou entre em contato diretamente pelo WhatsApp para um atendimento mais rápido
                </p>
                <Button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-6 text-wood-100">
                Informações de Contato
              </h3>
              <p className="text-wood-200 leading-relaxed mb-8">
                Nossa equipe está pronta para atendê-lo e tirar todas as suas dúvidas. 
                Entre em contato através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-wood-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-wood-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-wood-100 mb-1">{item.title}</h4>
                    <p className="text-wood-200 font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-wood-400">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-wood-800 rounded-2xl p-6 mt-8">
              <h4 className="font-bold text-wood-100 mb-4">Por que escolher a Maicon Melo Móveis?</h4>
              <ul className="space-y-3 text-wood-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-wood-400 rounded-full mr-3" />
                  Orçamento gratuito e sem compromisso
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-wood-400 rounded-full mr-3" />
                  Projeto 3D personalizado
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-wood-400 rounded-full mr-3" />
                  Garantia total nos móveis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-wood-400 rounded-full mr-3" />
                  Entrega no prazo combinado
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
