import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import HeroScene from '../3D/HeroScene';
import Modal from '../UI/Modal';
import ResumeContent from '../Content/ResumeContent';

const Hero: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Full Stack Developer and System Designer';
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (typewriterText.length < fullText.length) {
          setTypewriterText(fullText.slice(0, typewriterText.length + 1));
          timeout = setTimeout(handleTyping, 80);
        } else {
          // Pause at the end before deleting
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (typewriterText.length > 0) {
          setTypewriterText(fullText.slice(0, typewriterText.length - 1));
          timeout = setTimeout(handleTyping, 50);
        } else {
          // Pause before restarting
          timeout = setTimeout(() => setIsDeleting(false), 500);
        }
      }
    };

    timeout = setTimeout(handleTyping, 80);
    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting]);

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
          </h1>
          <h3 className="typewriter">
            {typewriterText}
            <span className="typewriter-cursor">|</span>
          </h3>
          <p className="hero-subtitle">
            Computer Science student at IIT Jodhpur, specializing in full-stack development, scalable systems design and algorithm optimization   
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
