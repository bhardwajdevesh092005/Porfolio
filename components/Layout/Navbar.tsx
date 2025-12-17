import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import ThemeToggle from '../UI/ThemeToggle';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <Terminal size={20} />
            </div>
            <span>Devesh Bhardwaj</span>
          </div>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            padding: '1rem 0',
            borderTop: '1px solid var(--border)',
            marginTop: '0.5rem'
          }}>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;