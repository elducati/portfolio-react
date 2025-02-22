import React from 'react';

const RepositoryCard = ({ name, description, html_url }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Repository
      </a>
    </div>
  );
};

export default RepositoryCard;