import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Devesh Bhardwaj. All rights reserved.</p>
          <span className="footer-divider">•</span>
          <p className="footer-credit">
            Made with <Heart size={16} className="heart-icon" /> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;