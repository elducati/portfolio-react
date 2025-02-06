// sections/Projects.jsx
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects';

const Projects = ({ visibleProjects, loadMore }) => {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className='load-more-card'>
      {visibleProjects < projectsData.length && (
        <button 
          className="load-more"
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