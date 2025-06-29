
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Presente",
      location: "São Paulo, SP",
      description: "Liderança técnica no desenvolvimento de aplicações React, mentoria de desenvolvedores júnior e implementação de práticas de código limpo.",
      achievements: [
        "Reduziu tempo de carregamento em 40%",
        "Implementou design system usado por toda empresa",
        "Mentoria de 5 desenvolvedores júnior"
      ]
    },
    {
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      period: "2020 - 2022",
      location: "Rio de Janeiro, RJ",
      description: "Desenvolvimento de sites e aplicações web responsivas para diversos clientes, utilizando React, TypeScript e outras tecnologias modernas.",
      achievements: [
        "Entregou 25+ projetos no prazo",
        "Aumentou satisfação do cliente em 95%",
        "Implementou metodologias ágeis"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Junior Developer",
      period: "2019 - 2020",
      location: "São Paulo, SP",
      description: "Início da carreira desenvolvendo features para plataforma de e-learning, trabalhando com JavaScript, React e Node.js.",
      achievements: [
        "Desenvolveu sistema de notificações",
        "Melhorou UX da plataforma",
        "Participou de hackathons internos"
      ]
    }
  ];

  const education = [
    {
      institution: "Universidade de São Paulo",
      degree: "Bacharelado em Ciência da Computação",
      period: "2016 - 2019",
      description: "Foco em desenvolvimento web e engenharia de software."
    },
    {
      institution: "Rocketseat",
      degree: "Ignite React",
      period: "2021",
      description: "Especialização em React, TypeScript e desenvolvimento moderno."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Minha <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experiência</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Minha jornada profissional e acadêmica no mundo da tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-purple-600" />
              Experiência Profissional
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-pink-300"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-display font-bold text-gray-900">
                          {exp.position}
                        </h4>
                        <span className="text-purple-600 font-medium">{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-pink-600" />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-display font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <span className="text-pink-600 font-medium">{edu.period}</span>
                  </div>
                  
                  <h5 className="font-medium text-gray-700 mb-3">{edu.institution}</h5>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h4 className="font-display font-bold text-gray-900 mb-4">Certificações</h4>
              <div className="space-y-3">
                {[
                  "AWS Certified Developer",
                  "Google Cloud Professional",
                  "MongoDB Certified Developer",
                  "React Advanced Patterns"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-4 w-4 text-purple-600 mr-3" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
