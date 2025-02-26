// sections/Projects.jsx
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const Projects = ({ visibleProjects, loadMore }) => {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('/img/grid-pattern.svg')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Projects
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A showcase of my most significant work and contributions
          </p>
        </div>

        {/* Projects grid - keeping the original columns structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Load more button - keeping the original onClick handler */}
        <div className="mt-8 text-center">
          {visibleProjects < projectsData.length && (
            <button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              onClick={loadMore}
            >
              Show More Projects
            </button>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Projects;