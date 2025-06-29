
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "iasmim.nunes@email.com",
      description: "Respondo em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      description: "WhatsApp disponível"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Disponível para remoto"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#", color: "hover:text-gray-900" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-600" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Vamos <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberta a novos desafios e oportunidades. Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-lg text-gray-700 mb-1">{info.value}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-bold text-gray-900 mb-4">Me siga nas redes</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="border border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-bold text-green-900">Disponível para novos projetos</h4>
                    <p className="text-green-700 text-sm">Vamos criar algo incrível juntos!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
