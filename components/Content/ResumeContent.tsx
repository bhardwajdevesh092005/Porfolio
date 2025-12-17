import React from 'react';
import { Mail, Phone, MapPin, Globe, Calendar } from 'lucide-react';

const ResumeContent: React.FC = () => {
  return (
    <div>
      
      {/* Header */}
      <div>
        <h1>Alex Dev</h1>
        <p>Senior Frontend Engineer</p>
        
        <div>
          <div><Mail size={16}/> alex.dev@example.com</div>
          <div><Phone size={16}/> +1 (555) 123-4567</div>
          <div><MapPin size={16}/> San Francisco, CA</div>
          <div><Globe size={16}/> alexdev.io</div>
        </div>
      </div>

      {/* Summary */}
      <section>
        <h3>
          Professional Summary
        </h3>
        <p>
          Innovative Senior Frontend Engineer with 6+ years of experience in building high-performance, responsive web applications. Expert in React ecosystem, TypeScript, and modern UI/UX principles. Proven track record of leading teams, optimizing build processes, and delivering scalable solutions. Passionate about 3D web graphics and accessibility.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h3>
          Experience
        </h3>
        
        <div>
          <div>
            <h4>Senior Frontend Developer</h4>
            <span><Calendar size={14}/> 2021 - Present</span>
          </div>
          <p>TechCorp Solutions</p>
          <ul>
            <li>Spearheaded the migration of a legacy monolithic application to a micro-frontend architecture using React and Module Federation.</li>
            <li>Improved application performance by 40% through code splitting, lazy loading, and memoization techniques.</li>
            <li>Mentored a team of 5 junior developers, conducting code reviews and technical workshops.</li>
          </ul>
        </div>

        <div>
          <div>
            <h4>Frontend Developer</h4>
            <span><Calendar size={14}/> 2018 - 2021</span>
          </div>
          <p>Creative Web Agency</p>
          <ul>
            <li>Developed 20+ responsive websites for diverse clients using React, Gatsby, and Tailwind CSS.</li>
            <li>Implemented complex animations using Framer Motion and GSAP, increasing user engagement metrics by 25%.</li>
            <li>Collaborated closely with designers to translate Figma prototypes into pixel-perfect code.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3>
          Technical Skills
        </h3>
        <div>
          <div><span>Languages:</span> TypeScript, JavaScript (ES6+), HTML5, CSS3, GLSL</div>
          <div><span>Frameworks:</span> React, Next.js, Vue.js</div>
          <div><span>Styling:</span> Tailwind CSS, SCSS, Styled Components</div>
          <div><span>3D & Animation:</span> Three.js, React Three Fiber, Framer Motion, GSAP</div>
          <div><span>Tools:</span> Git, Webpack, Vite, Docker, AWS</div>
          <div><span>Testing:</span> Jest, React Testing Library, Cypress</div>
        </div>
      </section>

    </div>
  );
};

export default ResumeContent;