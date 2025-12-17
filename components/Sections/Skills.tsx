import React, { useState } from 'react';
import { Code2, Server, Network, Cpu, Globe, GitBranch, Terminal, Smartphone } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: [
      { name: 'React', icon: Code2, description: 'UI Library' },
      { name: 'JavaScript', icon: Globe, description: 'Core Language' },
      { name: 'Expo', icon: Smartphone, description: 'Mobile Framework' },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server, description: 'Runtime Environment' },
      { name: 'Python', icon: Terminal, description: 'Scripting & ML' },
      { name: 'Java', icon: Terminal, description: 'Enterprise Apps' },
    ]
  },
  {
    title: 'Real-Time',
    icon: Network,
    skills: [
      { name: 'WebRTC', icon: Network, description: 'P2P Communication' },
      { name: 'Socket.io', icon: Network, description: 'Real-time Events' },
      { name: 'WebSockets', icon: Network, description: 'Bidirectional Comms' },
    ]
  },
  {
    title: 'Low-Level',
    icon: Cpu,
    skills: [
      { name: 'C++', icon: Code2, description: 'Systems Programming' },
      { name: 'Algorithms', icon: Cpu, description: 'Problem Solving' },
      { name: 'System Design', icon: Cpu, description: 'Architecture' },
    ]
  },
];

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills">
      <div className="container">
        <SectionHeading title="Tech Stack" subtitle="Organized by expertise areas and technologies." />
        
        <div className="skills-category-grid">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            
            return (
              <div key={categoryIndex} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <CategoryIcon size={32} />
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                
                <div className="skill-items-grid">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    const isFlipped = hoveredSkill === skillKey;
                    
                    return (
                      <div 
                        key={skillIndex} 
                        className={`skill-flip-card ${isFlipped ? 'flipped' : ''}`}
                        onMouseEnter={() => setHoveredSkill(skillKey)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => setHoveredSkill(isFlipped ? null : skillKey)}
                      >
                        <div className="skill-flip-inner">
                          <div className="skill-flip-front">
                            <SkillIcon size={24} />
                            <span className="skill-name-short">{skill.name}</span>
                          </div>
                          
                          <div className="skill-flip-back">
                            <span className="skill-description">{skill.description}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
