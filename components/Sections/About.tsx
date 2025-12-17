import React from 'react';
import SectionHeading from '../UI/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading title="About Me" />
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/profile.jpg" 
              alt="Devesh Bhardwaj" 
            />
          </div>

          <div className="about-text">
            <h3>
              Computer Science Student at IIT Jodhpur
            </h3>
            <p>
              I am a passionate Computer Science undergraduate at IIT Jodhpur with a strong CGPA of 9.41. My expertise spans across algorithm development, full-stack development, and machine learning. I've worked on cutting-edge projects involving route optimization, real-time audio processing, and decentralized systems.
            </p>
            <p>
              As an Algorithm Developer Intern at R2G Logistics, I implemented route optimization algorithms that improved delivery efficiency by 30% and reduced training costs by 70%. I'm constantly exploring new technologies and pushing the boundaries of what's possible with code.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">9.41</span>
                <span className="stat-label">CGPA at IIT Jodhpur</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">1616</span>
                <span className="stat-label">AIR JEE Advanced</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">3★</span>
                <span className="stat-label">CodeChef Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
