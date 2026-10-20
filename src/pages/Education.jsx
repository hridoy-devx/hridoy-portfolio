import React from 'react';
import { educationList } from '../data/education';

const Education = () => {
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
            05 / Education
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
            Academic <br />
            <span style={{ color: '#a3a3a3' }}>Background</span>
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
            Formal qualifications, computer science foundations, and continuous academic milestones.
          </p>
        </div>

        {/* EDUCATION CARDS LIST */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {educationList.map((item) => (
            <div
              key={item.id}
              style={{
                background: '#10141A',
                border: '1px solid #252C35',
                borderRadius: '6px',
                padding: 'clamp(24px, 5vw, 36px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px #252C35',
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

              {/* CARD HEADER */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
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
                        border: '1px solid #252C35',
                        color: '#a3e635',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
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
                      {item.degree}
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
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.82l-5 2.73-5-2.73v-3.82l5 2.73 5-2.73v3.82z"/>
                    </svg>
                    {item.institution}
                  </div>
                </div>

                {/* STATUS & DURATION / LOCATION */}
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
                      background: item.status?.includes('Currently')
                        ? '#10141A'
                        : '#10141A',
                      border: item.status?.includes('Currently')
                        ? '1px solid #252C35'
                        : '1px solid #252C35',
                      color: item.status?.includes('Currently') ? '#a3e635' : '#a3a3a3',
                    }}
                  >
                    {item.status}
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
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                    </svg>
                    {item.duration} {item.location && `• ${item.location}`}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              {item.description && (
                <p
                  style={{
                    color: '#a3a3a3',
                    fontSize: '14px',
                    lineHeight: 1.8,
                    margin: '0 0 20px',
                  }}
                >
                  {item.description}
                </p>
              )}

              {/* HIGHLIGHTS LIST */}
              {item.highlights && item.highlights.length > 0 && (
                <div
                  style={{
                    padding: '20px',
                    borderRadius: '4px',
                    background: '#10141A',
                    border: '1px solid #252C35',
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
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    Academic Highlights & Focus:
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
                    {item.highlights.map((point, index) => (
                      <li
                        key={index}
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
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;