import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import { Project } from '../../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Pravah - Audio Enhancement Pipeline',
    description: 'Designed and implemented a pipeline to enhance audio clarity by reducing noise, improving signal fidelity, and optimizing playback quality using signal-processing techniques and automated evaluation.',
    tags: ['Node.js', 'React', 'JavaScript', 'Socket.io', 'WebRTC'],
    demoUrl: '#',
    repoUrl: 'https://github.com/bhardwajdevesh092005'
  },
  {
    id: '2',
    title: 'LIBR - Decentralized Forum',
    description: 'A censor-resilient yet moderated platform using DHTs and blockchain, with fault tolerance via Byzantine consensus. Features modular architecture with partial message immutability for reconfigurability.',
    tags: ['Go', 'Blockchain', 'DHT', 'System Design'],
    demoUrl: '#',
    repoUrl: 'https://github.com/bhardwajdevesh092005'
  },
  {
    id: '3',
    title: 'WhatsApp Chat Bot',
    description: 'Created a WhatsApp auto-reply chatbot with login dashboard and analytics featuring customized replies. Built with Node.js backend and whatsapp-web.js for auto-reply and QR-based login.',
    tags: ['Node.js', 'WhatsApp API', 'JavaScript', 'Analytics'],
    demoUrl: '#',
    repoUrl: 'https://github.com/bhardwajdevesh092005'
  },
  {
    id: '4',
    title: 'Route Optimization - R2G Logistics',
    description: 'Implemented route optimization algorithms (A*, Christofides) to compute shortest paths across 15-20 delivery locations, improving efficiency by 30% and reducing training costs by 70%.',
    tags: ['Java', 'Algorithms', 'Graph Theory', 'Optimization'],
    demoUrl: '#',
    repoUrl: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent work." />

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-links">
                  {/* <a href={project.demoUrl} className="project-link">
                    <ExternalLink size={16} /> Live Demo
                  </a> */}
                  <a href={project.repoUrl} className="project-link">
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
