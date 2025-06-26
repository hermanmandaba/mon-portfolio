import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from './ui/Button';
import projects from '@/app/types/Projects';
import Image from 'next/image';

const ProjectsSection = () => {

  return (
    <section id="projects" className="py-20 bg-[#0F1629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#D4AF37] mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
            A showcase of my recent work, demonstrating expertise in modern web development 
            technologies and user-centered design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#1A2332] border border-[#D4AF37] border-opacity-20 hover:border-[#D4AF37] hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-0">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0F1629] bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button 
                        size="sm" 
                        className="bg-[#D4AF37] hover:bg-[#E6C659] text-[#0F1629]"
                      >
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F1629]"
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-inter leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-[#D4AF37] bg-opacity-50 text-[#D4AF37] text-sm rounded-full font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;