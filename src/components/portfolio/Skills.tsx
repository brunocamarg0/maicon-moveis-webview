
import { Code, Smartphone, Database, Palette, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      icon: Database,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "REST APIs", "GraphQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "from-purple-500 to-pink-500",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase"]
    },
    {
      icon: Palette,
      title: "Design",
      color: "from-orange-500 to-red-500",
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Prototipagem", "Design System"]
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      color: "from-indigo-500 to-purple-500",
      skills: ["AWS", "Docker", "Vercel", "Netlify", "GitHub Actions", "CI/CD"]
    },
    {
      icon: Zap,
      title: "Ferramentas",
      color: "from-yellow-500 to-orange-500",
      skills: ["Git", "VS Code", "Postman", "Notion", "Slack", "Trello"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Minhas <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Interessado em trabalhar comigo?
            </h3>
            <p className="text-gray-600 mb-6">
              Estou sempre aberta a novos desafios e oportunidades de colaboração.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
