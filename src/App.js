// App.js
import { useState } from 'react';
import Header from './components/Header';
import LeadSection from './sections/Lead';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import GithubRepositories from './sections/GithubRepositories';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [visibleRepos, setVisibleRepos] = useState(6);

  const loadMoreRepos = () => {
    setVisibleRepos(prev => prev + 4);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 4);
  };

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''} min-h-screen`}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <LeadSection />
      <About />
      <Experience />
      <Projects
        visibleProjects={visibleProjects}
        loadMore={loadMoreProjects}
      />
      <GithubRepositories
        visibleRepos={visibleProjects}
        loadMoreRepos={loadMoreRepos} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;