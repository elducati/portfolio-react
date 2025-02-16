// sections/Projects.jsx
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const Projects = ({ visibleProjects, loadMore }) => {
  return (
    <section id="projects" className="py-16 bg-gray-800 backdrop-blur-md border border-white/20 p-8 md:p-16">
      <h2 className="text-4xl text-center mb-10 text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="mt-8 text-center">
        {visibleProjects < projectsData.length && (
          <button 
            className="px-6 py-3 bg-blue-500 text-white rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            onClick={loadMore}
          >
            Show More Projects
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;