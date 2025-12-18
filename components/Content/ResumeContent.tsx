import React from 'react';

const ResumeContent: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <iframe
        src={`Porfolio/Resume_Dev.pdf`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '8px'
        }}
        title="Resume PDF"
      />
      <a 
        href={`/Resume_Dev.pdf`} 
        download="Devesh_Bhardwaj_Resume.pdf"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: 'var(--accent-color)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          textAlign: 'center',
          fontWeight: 600,
          transition: 'var(--transition)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeContent;
