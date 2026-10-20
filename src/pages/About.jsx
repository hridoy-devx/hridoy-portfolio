import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personalInfo';
import profileImage from '../assets/profile';

const About = () => {
  return (
    <section
      style={{
        padding: 'clamp(60px, 8vw, 110px) 0',
      
        color: '#ffffff',
        minHeight: 'calc(100vh - 76px)',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        {/* SECTION HEADER */}
        <div style={{ maxWidth: '620px', marginBottom: '50px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
              color: '#a3e635',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '25px',
                height: '1px',
                background: '#a3e635',
              }}
            />
            01 / Get To Know Me
          </div>

          <h1
            style={{
              margin: '0 0 18px',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 750,
              lineHeight: 1.05,
              letterSpacing: '-0.05em',
              color: '#ffffff',
            }}
          >
            About <br />
            <span style={{ color: '#a3a3a3' }}>{personalInfo?.name || 'Abdul Kadir Hridoy'}</span>
            <span style={{ color: '#a3e635' }}>.</span>
          </h1>

          <p
            style={{
              margin: 0,
              color: '#a3a3a3',
              fontSize: '15px',
              lineHeight: 1.85,
            }}
          >
            A look into my journey as a developer, academic background, and passion for front-end craft.
          </p>
        </div>

        {/* PROFILE HIGHLIGHT ROW */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(36px, 6vw, 70px)',
            alignItems: 'center',
            marginBottom: '80px',
          }}
        >
          {/* ULTRA-GORGEOUS DEDICATED PHOTO AREA */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '390px',
              justifySelf: 'center',
            }}
          >
            {/* SOFT LIME GLOW BEHIND PHOTO */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                height: '90%',
                background: 'radial-gradient(circle, rgba(163, 230, 53, 0.15) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
              }}
            />

            {/* TOP-RIGHT CORNER FRAME TRIMS */}
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                right: '-14px',
                width: '75px',
                height: '75px',
                borderTop: '2px solid #a3e635',
                borderRight: '2px solid #a3e635',
                zIndex: 2,
              }}
            />
            {/* BOTTOM-LEFT CORNER FRAME TRIMS */}
            <div
              style={{
                position: 'absolute',
                bottom: '-14px',
                left: '-14px',
                width: '75px',
                height: '75px',
                borderBottom: '2px solid #a3e635',
                borderLeft: '2px solid #a3e635',
                zIndex: 2,
              }}
            />

            {/* MAIN IMAGE CONTAINER */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                background: '#10141A',
                border: '1px solid #252C35',
                borderRadius: '4px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src={profileImage}
                alt={`${personalInfo?.name || 'Developer'} Portrait`}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'saturate(0.9)',
                  transition: 'transform 0.5s ease',
                }}
              />

              {/* GRADIENT OVERLAY */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '40px 22px 20px',
                  background: 'linear-gradient(transparent, #10141A)',
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    letterSpacing: '2px',
                    color: '#a3e635',
                    marginBottom: '4px',
                    fontWeight: 700,
                  }}
                >
                  FULL-STACK DEVELOPER
                </div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 650,
                    color: '#ffffff',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {personalInfo?.name || 'Abdul Kadir Hridoy'}
                </div>
              </div>
            </div>

            {/* PHOTO CAPTION BADGE */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                paddingTop: '16px',
                color: '#737373',
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              <span>INDEPENDENT THINKER</span>
              <span style={{ color: '#a3e635' }}>GAZIPUR, BD ↗</span>
            </div>
          </div>

          {/* QUICK BIO & KEY ATTRIBUTES */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 38px)',
                fontWeight: 750,
                lineHeight: 1.15,
                letterSpacing: '-0.04em',
                marginBottom: '18px',
                color: '#ffffff',
              }}
            >
              Crafting Clean Code & <br />
              <span style={{ color: '#a3a3a3' }}>Intuitive Interfaces</span>
              <span style={{ color: '#a3e635' }}>.</span>
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: '#a3a3a3',
                lineHeight: 1.85,
                marginBottom: '28px',
              }}
            >
              {personalInfo?.bio || 'Passionate web developer specializing in building clean, performant, and responsive web applications using modern Javascript technologies.'}
            </p>

            {/* ATTRIBUTE GRID CARDS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '14px',
                marginBottom: '32px',
              }}
            >
              {[
                { label: 'Education', value: 'Full-Stack Diploma' },
                { label: 'Experience', value: 'Practical Projects' },
                { label: 'Focus', value: 'React & Modern Web' },
                { label: 'Location', value: personalInfo?.location || 'Gazipur, Bangladesh' },
              ].map((attr, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '16px',
                    background: '#10141A',
                    border: '1px solid #252C35',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#a3e635',
                      boxShadow: '0 0 8px #a3e635',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '10px', color: '#737373', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {attr.label}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#e5e5e5', marginTop: '2px' }}>
                      {attr.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to="/experience"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '14px 22px',
                  background: '#a3e635',
                  color: '#10141A',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.3px',
                }}
              >
                View My Experience
              </Link>
              <Link
                to="/education"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '14px 22px',
                  border: '1px solid #252C35',
                  background: '#10141A',
                  color: '#ffffff',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                View Education
              </Link>
            </div>
          </div>
        </div>

        {/* 3 DETAILED STORY CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}
        >
          {/* Card 1: Journey */}
          <div
            style={{
              background: '#10141A',
              border: '1px solid #252C35',
              borderRadius: '6px',
              padding: '32px 28px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '4px',
                background: '#10141A',
                border: '1px solid #252C35',
                color: '#a3e635',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>
              My Journey as a Developer
            </h3>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8, fontSize: '14px', margin: 0 }}>
              {personalInfo?.journey || 'Started with HTML, CSS, and JavaScript, building multi-section landing pages and DOM applications, eventually graduating to full-stack web applications with React, Express, and MongoDB.'}
            </p>
          </div>

          {/* Card 2: Education & Academic Focus */}
          <div
            style={{
              background: '#10141A',
              border: '1px solid #252C35',
              borderRadius: '6px',
              padding: '32px 28px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '4px',
                background: '#10141A',
                border: '1px solid #252C35',
                color: '#a3e635',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>
              Education & Web Engineering
            </h3>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8, fontSize: '14px', margin: 0 }}>
              Completed Secondary & Higher Secondary education followed by an intensive 14-month Full-Stack Web Development Diploma, grounding my understanding of modern UI architectures, REST APIs, and state management.
            </p>
          </div>

          {/* Card 3: Career Goals */}
          <div
            style={{
              background: '#10141A',
              border: '1px solid #252C35',
              borderRadius: '6px',
              padding: '32px 28px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '4px',
                background: '#10141A',
                border: '1px solid #252C35',
                color: '#a3e635',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#ffffff' }}>
              My Career Goals
            </h3>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8, fontSize: '14px', margin: 0 }}>
              {personalInfo?.careerGoals || 'Aimed at securing a Junior Full-Stack / Front-End Developer role or internship, contributing to impactful web products while expanding my capabilities in scalable web apps.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;