
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import navLogo from '../assets/nav-logo.png';
import cvFile from '../assets/CV.pdf';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: scrolled
          ? '#0B0E13'
          : '#0B0E13',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #262626',
        boxShadow: scrolled
          ? '0 10px 30px rgba(0, 0, 0, 0.8)'
          : '0 4px 20px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* NAVBAR CONTAINER */}
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* BRAND / LOGO */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexShrink: 0,
            minWidth: 0,
            height: '100%',
          }}
        >
          <NavLink
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
            aria-label="Portfolio Home"
          >
            <img
              src={navLogo}
              alt="Logo"
              style={{
                display: 'block',
                height: '200px',
                width: 'auto',
                maxWidth: '200px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
              }}
            />
          </NavLink>
        </div>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav
          className="desktop-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: '#0B0E13',
            padding: '4px 6px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="dock-nav-item"
              style={({ isActive }) => ({
                position: 'relative',
                padding: '8px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: isActive ? 700 : 500,
                letterSpacing: '0.4px',
                textDecoration: 'none',
                color: isActive ? '#0a0a0a' : '#a3a3a3',
                background: isActive ? '#a3e635' : 'transparent',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isActive
                  ? '0 4px 12px rgba(163, 230, 53, 0.25)'
                  : 'none',
              })}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* RESUME BUTTON & MOBILE TOGGLE */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-menu resume-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 18px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#ffffff',
              background: '#121212',
              border: '1px solid #333333',
              textDecoration: 'none',
              letterSpacing: '0.3px',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }}
          >
            <span>Resume</span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            style={{
              display: 'none',
              color: '#a3e635',
              padding: '8px 10px',
              borderRadius: '6px',
              background: '#141414',
              border: '1px solid #262626',
              cursor: 'pointer',
            }}
          >
            {isOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div
          style={{
            background: '#0d0d0d',
            borderTop: '1px solid #222222',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
            animation: 'fadeInSlide 0.25s ease-out',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                padding: '12px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                color: isActive ? '#0a0a0a' : '#a3a3a3',
                background: isActive ? '#a3e635' : '#141414',
                border: isActive
                  ? '1px solid #a3e635'
                  : '1px solid #222222',
              })}
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: '8px',
              textAlign: 'center',
              padding: '12px',
              background: '#1a1a1a',
              border: '1px solid #333333',
              color: '#ffffff',
              fontWeight: 700,
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>View Resume</span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a3e635"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}

      {/* HOVER STYLES & MEDIA QUERIES */}
      <style>{`
        .dock-nav-item:hover:not([style*="background: rgb(163, 230, 53)"]) {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }

        .resume-btn:hover {
          border-color: #a3e635 !important;
          background: #1f1f1f !important;
          color: #a3e635 !important;
        }

        .resume-btn:hover svg {
          stroke: #a3e635 !important;
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 960px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
