import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! Message sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className='align-center text-center w-full justify-center flex'>
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's build something together." />
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, internship opportunities, or collaborating on innovative ideas in algorithm optimization and full-stack development.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-item-content">
                  <h4>Email Me</h4>
                  <p>bhardwajdevesh098@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-content">
                  <h4>Location</h4>
                  <p>IIT Jodhpur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
