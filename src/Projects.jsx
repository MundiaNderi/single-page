import React from 'react';
import projectsData from './data';
import '/src/Projects.css';

export default function Projects() {
  return (
    <>
      <div className="projects mx-4 md:mx-44 border border-red-500 flex flex-col md:flex-row items-center justify-between">
        <h2 className="font-bold md:text-7xl leading-88 md:tracking-wide text-2xl leading-10 tracking-tight">
          Projects
        </h2>
        <p className="text-white contact font-space md:tracking-wider underline font-bold text-base leading-7 tracking-wide">
          CONTACT ME
        </p>
      </div>
      <div className="card grid md:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-44">
        {projectsData.map((project) => (
          <div key={project.id} className="flex-shrink-0">
            <img
              src={project.image} 
              alt={`Project: ${project.title}`}
              className="w-full h-400px object-cover md:w-547px"
            />
            <h2 className="font-space mt-10 md:mt-5 font-bold text-xl leading-8">{project.title} </h2>
            <p className="text-white contact font-space font-medium text-base leading-7">{project.skills}</p>
          </div>
        ))}
      </div>
    </>
  );
}
