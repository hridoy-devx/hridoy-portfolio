import React from 'react';
import { experiences } from '../data/experience';

const Experience = () => {
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
            03 / Career Track
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
            Work <br />
            <span style={{ color: '#a3a3a3' }}>Experience</span>
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
            Professional roles, freelance contracts, and front-end development responsibilities.
          </p>
        </div>

        {/* EXPERIENCE TIMELINE LIST */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              style={{
                background: '#10141A',
                border: '1px solid #252C35',
                borderRadius: '6px',
                padding: 'clamp(24px, 5vw, 36px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px #10141A',
              }}
            >
              {/* CORNER ACCENT BORDER */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '30px',
                  height: '30px',
                  borderTop: '2px solid #a3e635',
                  borderRight: '2px solid #a3e635',
                }}
              />

              {/* HEADER INFO */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '4px',
                        background: '#10141A',
                        border: '1px solid #252C35)',
                        color: '#a3e635',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                      </svg>
                    </div>

                    <h2
                      style={{
                        margin: 0,
                        fontSize: 'clamp(18px, 2.5vw, 22px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.3px',
                      }}
                    >
                      {exp.role}
                    </h2>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#a3e635',
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                    </svg>
                    {exp.company}
                  </div>
                </div>

                {/* DURATION & LOCATION BADGES */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '6px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: '3px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      background: '#10141A',
                      border: '1px solid #252C35',
                      color: '#a3e635',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                    </svg>
                    {exp.duration}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      color: '#737373',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  color: '#a3a3a3',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  margin: '0 0 20px',
                }}
              >
                {exp.description}
              </p>

              {/* RESPONSIBILITIES BULLET POINTS */}
              <div
                style={{
                  padding: '20px',
                  borderRadius: '4px',
                  background: '#10141A',
                  border: '1px solid #252C35',
                  marginBottom: '20px',
                }}
              >
                <h3
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#e5e5e5',
                    margin: '0 0 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#a3e635">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Key Contributions & Responsibilities:
                </h3>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {exp.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '13px',
                        color: '#a3a3a3',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: '#a3e635', fontWeight: 700 }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECHNOLOGIES USED */}
              <div>
                <h4
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#737373',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  Technologies Applied:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '3px',
                        fontSize: '12px',
                        fontWeight: 600,
                        background: '#10141A',
                        border: '1px solid #252C35',
                        color: '#e5e5e5',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;