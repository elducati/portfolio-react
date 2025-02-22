import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RepositoryCard from '../components/RepositoryCard';

const GithubRepositories = ({ visibleRepos, loadMoreRepos }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/elducati/repos');
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section id="github-repositories" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border border-white/20 p-8 md:p-16">
      <h2 className="text-4xl text-center mb-10 text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">GitHub Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repositories.slice(0, visibleRepos).map((repo, index) => (
          <RepositoryCard key={index} {...repo} />
        ))}
      </div>
      <div className="mt-8 text-center">
        {visibleRepos < repositories.length && (
          <button 
            className="px-6 py-3 bg-blue-500 text-white rounded shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            onClick={loadMoreRepos}
          >
            Show More Repositories
          </button>
        )}
      </div>
    </section>
  );
};

export default GithubRepositories;