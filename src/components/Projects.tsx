
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Cozinha Moderna Integrada",
      category: "Cozinha",
      description: "Projeto completo com ilha central, marcenaria sob medida e acabamentos premium.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      details: ["Ilha central funcional", "Armários até o teto", "Acabamento laminado", "Iluminação LED integrada"]
    },
    {
      id: 2,
      title: "Quarto Casal Completo",
      category: "Dormitório",
      description: "Suite master com closet integrado, cabeceira planejada e móveis sob medida.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      details: ["Guarda-roupa de canto", "Cabeceira com criados", "Penteadeira integrada", "Iluminação indireta"]
    },
    {
      id: 3,
      title: "Home Office Executivo",
      category: "Escritório",
      description: "Ambiente profissional com mesa ampla, estantes e móveis organizadores.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
      details: ["Mesa em L ampla", "Estantes modulares", "Gaveteiros organizadores", "Painel para TV"]
    },
    {
      id: 4,
      title: "Closet Feminino Luxo",
      category: "Closet",
      description: "Closet personalizado com divisórias inteligentes e espelho de corpo inteiro.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      details: ["Divisórias para sapatos", "Gavetas com veludo", "Espelho 3 faces", "Iluminação LED"]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-white">
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
            Nossos <span className="text-wood-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-wood-700 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que transformaram a vida dos nossos clientes.
          </p>
        </motion.div>

        {/* Main Project Display */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-2xl border-wood-200">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-wood-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-playfair font-bold text-wood-900 mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-lg text-wood-700 mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Details */}
                <div className="mb-8">
                  <h4 className="font-semibold text-wood-900 mb-3">Características do Projeto:</h4>
                  <ul className="space-y-2">
                    {projects[currentProject].details.map((detail, index) => (
                      <li key={index} className="flex items-center text-wood-700">
                        <div className="w-2 h-2 bg-wood-400 rounded-full mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="bg-wood-600 hover:bg-wood-700 text-white w-fit">
                  Ver Mais Detalhes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevProject}
              className="w-12 h-12 bg-wood-100 hover:bg-wood-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-wood-700" />
            </button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-wood-600 w-8' : 'bg-wood-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="w-12 h-12 bg-wood-100 hover:bg-wood-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6 text-wood-700" />
            </button>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-wood-200 ${
                index === currentProject ? 'ring-2 ring-wood-400' : ''
              }`}
              onClick={() => setCurrentProject(index)}
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-wood-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-playfair font-bold text-wood-900 mb-2 line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-sm text-wood-600 line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
