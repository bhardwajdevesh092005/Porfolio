import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import HeroScene from '../3D/HeroScene';
import Modal from '../UI/Modal';
import ResumeContent from '../Content/ResumeContent';

const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="home">
      <div className="hero-scene-wrapper">
         <HeroScene />
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge">
            Open to Opportunities
          </div>
          <h1 className="hero-title">
            Devesh Bhardwaj
            <br />
            Algorithm & Systems Developer
          </h1>
          <p className="hero-subtitle">
            Computer Science student at IIT Jodhpur, specializing in algorithm optimization, full-stack development, and scalable systems design
          </p>

          <div className="hero-buttons">
             <button
               onClick={() => {
                 const projectsSection = document.getElementById('projects');
                 projectsSection?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="btn btn-primary"
             >
               View Work 
               <ArrowRight size={20} />
             </button>
             
             <button
               onClick={() => setIsResumeOpen(true)}
               className="btn btn-secondary"
             >
               <FileText size={20} /> Resume
             </button>
          </div>

          <div className="hero-social">
             <a href="https://github.com/bhardwajdevesh092005" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></a>
             <a href="https://www.linkedin.com/in/devesh-bhardwaj-0b6b3a258/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
             <a href="mailto:bhardwajdevesh098@gmail.com" aria-label="Email"><Mail size={24} /></a>
          </div>
        </motion.div>
      </div>

      <Modal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)}
        title="Resume"
      >
        <ResumeContent />
      </Modal>
    </section>
  );
};

export default Hero;
