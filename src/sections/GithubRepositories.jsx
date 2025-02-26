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
    <section id="github-repositories" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('/img/grid-pattern.svg')]"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="inline-block text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            GitHub Repositories
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My open-source work and code contributions
          </p>
        </div>

        {/* Repositories grid - keeping the original columns structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {repositories.slice(0, visibleRepos).map((repo, index) => (
            <RepositoryCard key={index} {...repo} />
          ))}
        </div>

        {/* Load more button - keeping the original onClick handler */}
        <div className="mt-12 text-center">
          {visibleRepos < repositories.length && (
            <button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              onClick={loadMoreRepos}
            >
              Show More Repositories
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

export default GithubRepositories;