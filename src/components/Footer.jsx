import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#0B0E13',
        color: '#ffffff',
        borderTop: '1px solid #252C35',
        padding: 'clamp(0px, 6vw, 90px) 0 36px',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* GLOBAL FOOTER ANIMATIONS & HOVER EFFECTS */}
      <style>{`
        @keyframes footerGlowPulse {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.6; transform: translateX(-50%) scale(1.1); }
        }
        .footer-link-item {
          transition: all 0.3s ease;
        }
        .footer-link-item:hover {
          color: #a3e635 !important;
          transform: translateX(4px);
        }
        .footer-social-icon {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .footer-social-icon:hover {
          background: #0B0E13!important;
          border-color: #252C35!important;
          color: #a3e635 !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 20px rgba(163, 230, 53, 0.15);
        }
        .footer-top-btn {
          transition: all 0.3s ease;
        }
        .footer-top-btn:hover {
          border-color: #252C35 !important;
          background: #0B0E13 !important;
          color: #a3e635 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(163, 230, 53, 0.12);
        }
      `}</style>

      {/* SOFT 3D AMBIENT BACKGROUND GLOW */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '280px',
          background: 'radial-gradient(circle, #0B0E13)',
          pointerEvents: 'none',
          filter: 'blur(70px)',
          animation: 'footerGlowPulse 8s ease-in-out infinite',
        }}
      />

      <div className="container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        
        {/* TOP BRANDING BANNER STRIP */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            paddingBottom: '45px',
            marginBottom: '55px',
            borderBottom: '1px solid #252C35',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#a3e635',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '10px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#a3e635',
                  boxShadow: '0 0 10px #a3e635',
                }}
              />
              Open For Opportunities
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: 'clamp(26px, 4.5vw, 40px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#ffffff',
                lineHeight: 1.15,
              }}
            >
              Let's create something extraordinary<span style={{ color: '#a3e635' }}>.</span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="footer-top-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 22px',
              background: '#0B0E13',
              border: '1px solid #252C35',
              color: '#ffffff',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            <span>Back To Top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-8 8h5v8h6v-8h5z"/>
            </svg>
          </button>
        </div>

        {/* MAIN GRID LINKS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(36px, 5vw, 64px)',
            marginBottom: '64px',
          }}
        >
          {/* COL 1: BIO & SOCIALS */}
          <div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 750,
                color: '#ffffff',
                margin: '0 0 14px',
                letterSpacing: '-0.5px',
              }}
            >
              {personalInfo?.name || 'Abdul Kadir Hridoy'}
            </h3>

            <p
              style={{
                color: '#a3a3a3',
                fontSize: '14px',
                lineHeight: 1.8,
                margin: '0 0 24px',
                maxWidth: '320px',
              }}
            >
              {personalInfo?.tagline || 'Building clean, functional, and user-centric web experiences.'}
            </p>

            {/* SOCIAL LINKS */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                {
                  href: personalInfo?.socialLinks?.github || '#',
                  label: 'GitHub',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  ),
                },
                {
                  href: personalInfo?.socialLinks?.linkedin || '#',
                  label: 'LinkedIn',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  ),
                },
                {
                  href: `mailto:${personalInfo?.email || ''}`,
                  label: 'Email',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="footer-social-icon"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: '#0B0E13',
                    border: '1px solid #252C35',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a3a3a3',
                    textDecoration: 'none',
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2: QUICK NAVIGATION */}
          <div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#737373',
                textTransform: 'uppercase',
                marginBottom: '20px',
                fontWeight: 700,
              }}
            >
              Navigation
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                { label: 'Home', path: '/' },
                { label: 'About Me', path: '/about' },
                { label: 'Technical Skills', path: '/skills' },
                { label: 'Work Experience', path: '/experience' },
                { label: 'Projects Showcase', path: '/projects' },
                { label: 'Education', path: '/education' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="footer-link-item"
                    style={{
                      display: 'inline-block',
                      color: '#a3a3a3',
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: DIRECT CONTACT */}
          <div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#737373',
                textTransform: 'uppercase',
                marginBottom: '20px',
                fontWeight: 700,
              }}
            >
              Direct Contact
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '10px', color: '#737373', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>LOCATION</div>
              <div style={{ fontSize: '14px', color: '#e5e5e5', fontWeight: 500 }}>{personalInfo?.location || 'Gazipur, Bangladesh'}</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '10px', color: '#737373', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>EMAIL</div>
              <div style={{ fontSize: '14px', color: '#e5e5e5', fontWeight: 500, wordBreak: 'break-all' }}>{personalInfo?.email}</div>
            </div>

            <Link
              to="/contact"
              className="footer-top-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                border: '1px solid #252C35',
                background: '#0B0E13',
                color: '#ffffff',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.3px',
              }}
            >
              <span>Get In Touch</span>
              <span style={{ color: '#a3e635' }}>↗</span>
            </Link>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT LINE */}
        <div
          style={{
            borderTop: '1px solid #252C35',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: '#737373',
          }}
        >
          <p style={{ margin: 0 }}>
            © {currentYear} <span style={{ color: '#ffffff', fontWeight: 600 }}>{personalInfo?.name || 'Abdul Kadir Hridoy'}</span>. All rights reserved.
          </p>

          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted with <span style={{ color: '#a3e635' }}>♥</span> & React.js
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;