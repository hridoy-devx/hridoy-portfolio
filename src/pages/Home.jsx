import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight, FaCode, FaRocket, FaLaptopCode, FaCheckCircle, FaClock } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import profileImage from '../assets/profile';

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredSkills = skillCategories[0].skills.slice(0, 4);

  return (
    <div>
   
{/* ================= CLEAN PREMIUM HERO ================= */}

<section
  style={{
    minHeight: 'calc(100vh - 76px)',
    display: 'flex',
    alignItems: 'center',
    padding: 'clamp(50px, 8vw, 100px) 0',
    
    color: '#ffffff',
    overflow: 'hidden',
  }}
>
  <div className="container" style={{ width: '100%' }}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        alignItems: 'center',
        gap: 'clamp(40px, 8vw, 110px)',
      }}
    >
      {/* LEFT CONTENT */}
      <div style={{ maxWidth: '620px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '30px',
            color: '#a3a3a3',
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#a3e635',
            }}
          />
          Available for Opportunities
        </div>

        <h1
          style={{
            margin: '0 0 26px',
            fontSize: 'clamp(44px, 7.5vw, 88px)',
            lineHeight: 1.02,
            letterSpacing: '-0.065em',
            fontWeight: 750,
          }}
        >
          Building
          <br />
          digital
          <br />
          <span style={{ color: '#a3a3a3' }}>
            experiences
          </span>
          <span style={{ color: '#a3e635' }}>.</span>
        </h1>

        <div
          style={{
            width: '54px',
            height: '2px',
            background: '#a3e635',
            marginBottom: '24px',
          }}
        />

        <h2
          style={{
            margin: '0 0 16px',
            fontSize: 'clamp(18px, 2.5vw, 23px)',
            fontWeight: 500,
            color: '#ffffff',
          }}
        >
          {personalInfo.name}
          <span style={{ color: '#737373' }}> / </span>
          <span style={{ color: '#a3a3a3' }}>
            {personalInfo.role}
          </span>
        </h2>

        <p
          style={{
            maxWidth: '470px',
            margin: '0 0 32px',
            color: '#a3a3a3',
            fontSize: '15px',
            lineHeight: 1.9,
          }}
        >
          {personalInfo.tagline}
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '22px',
              padding: '15px 19px',
              background: '#a3e635',
              color: '#0a0a0a',
              borderRadius: '3px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            Explore Projects
            <FaArrowRight size={14} />
          </Link>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 19px',
              border: '1px solid #333333',
              color: '#ffffff',
              borderRadius: '3px',
              textDecoration: 'none',
              fontSize: '13px',
            }}
          >
            Let's Talk
          </Link>
        </div>

        {/* BOTTOM DETAILS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '28px',
            marginTop: '52px',
            paddingTop: '22px',
            borderTop: '1px solid #262626',
          }}
        >
          {[
            { label: 'FOCUS', value: 'Web Development' },
            { label: 'APPROACH', value: 'Clean & Functional' },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  marginBottom: '8px',
                  fontSize: '10px',
                  letterSpacing: '1.5px',
                  color: '#737373',
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontSize: '13px',
                  color: '#e5e5e5',
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PORTRAIT */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '410px',
          justifySelf: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-14px',
            right: '-14px',
            width: '75px',
            height: '75px',
            borderTop: '1px solid #a3e635',
            borderRight: '1px solid #a3e635',
          }}
        />

        <div
          style={{
            position: 'relative',
            aspectRatio: '4 / 5',
            overflow: 'hidden',
            background: '#171717',
            border: '1px solid #292929',
          }}
        >
          <img
            src={profileImage}
            alt={`${personalInfo.name} portrait`}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'saturate(0.85)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '40px 22px 20px',
              background:
                'linear-gradient(transparent, rgba(0,0,0,0.8))',
            }}
          >
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '2px',
                color: '#a3e635',
                marginBottom: '8px',
              }}
            >
              THE DEVELOPER
            </div>

            <div
              style={{
                fontSize: '20px',
                fontWeight: 650,
                letterSpacing: '-0.5px',
              }}
            >
              {personalInfo.name}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: '15px',
            color: '#737373',
            fontSize: '10px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          <span>Independent Thinker</span>
          <span>Creative Developer ↗</span>
        </div>
      </div>
    </div>
  </div>
</section>

      
{/* ================= PREMIUM FEATURED SKILLS ================= */}
<section
  className="section-wrapper"
  style={{
   
    color: '#ffffff',
    padding: 'clamp(70px, 9vw, 115px) 0',
    borderTop: '1px solid #262626',
  }}
>
  <div className="container">

    {/* HEADER */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '25px',
        marginBottom: '48px',
      }}
    >
      <div style={{ maxWidth: '620px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '22px',
            color: '#A3E635',
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
              background: '#A3E635',
            }}
          />
          01 / Expertise
        </div>

        <h2
          style={{
            margin: '0 0 18px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-2.5px',
            color: '#ffffff',
          }}
        >
          Skills &<br />
          <span style={{ color: '#737373' }}>
            technologies
          </span>
          <span style={{ color: '#A3E635' }}>.</span>
        </h2>

        <p
          style={{
            maxWidth: '470px',
            margin: 0,
            color: '#A3A3A3',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            lineHeight: 1.9,
          }}
        >
          The technologies I work with to create responsive,
          accessible and user-focused digital experiences.
          Always learning, always improving.
        </p>
      </div>

      <Link
        to="/skills"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          padding: '14px 18px',
          border: '1px solid #383838',
          borderRadius: '3px',
          color: '#ffffff',
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          fontWeight: 600,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        View All Skills
        <FaArrowRight size={13} color="#A3E635" />
      </Link>
    </div>

    {/* SKILL GRID */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: '16px',
        alignItems: 'stretch',
      }}
    >
      {featuredSkills.map((skill) => (
        <SkillCard
          key={skill.name}
          skill={skill}
        />
      ))}
    </div>

    {/* FOOTER */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '14px',
        marginTop: '32px',
        paddingTop: '22px',
        borderTop: '1px solid #262626',
      }}
    >
      <p
        style={{
          margin: 0,
          color: '#737373',
          fontSize: '12px',
          lineHeight: 1.7,
        }}
      >
        Practical skills. Continuous growth.
      </p>

      <span
        style={{
          color: '#A3E635',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '1.5px',
        }}
      >
        LEARN / BUILD / IMPROVE
      </span>
    </div>

  </div>
</section>


      {/* ================= FEATURED PROJECTS SNAPSHOT ================= */}
      
      <section
        style={{
         
          color: '#ffffff',
          padding: 'clamp(70px, 9vw, 115px) 0',
          borderTop: '1px solid #262626',
        }}
      >
        <div className="container">
          {/* HEADER */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '25px',
              marginBottom: '48px',
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '22px',
                  color: '#A3E635',
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
                    background: '#A3E635',
                  }}
                />
                02 / Portfolio
              </div>

              <h2
                style={{
                  margin: '0 0 18px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(36px, 5.5vw, 64px)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '-2.5px',
                  color: '#ffffff',
                }}
              >
                Featured<br />
                <span style={{ color: '#737373' }}>
                  projects
                </span>
                <span style={{ color: '#A3E635' }}>.</span>
              </h2>

              <p
                style={{
                  maxWidth: '470px',
                  margin: 0,
                  color: '#A3A3A3',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  lineHeight: 1.9,
                }}
              >
                Selected client and personal web projects built with React.js, clean code, and API integrations.
              </p>
            </div>

            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                padding: '14px 18px',
                border: '1px solid #383838',
                borderRadius: '3px',
                color: '#ffffff',
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Explore All Projects
              <FaArrowRight size={13} color="#A3E635" />
            </Link>
          </div>

          {featuredProjects.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px',
              }}
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div
              style={{
                background: '#111111',
                border: '1px solid #262626',
                borderRadius: '6px',
                padding: '60px 24px',
                textAlign: 'center',
                maxWidth: '620px',
                margin: '0 auto',
              }}
            >
              <FaClock size={32} color="#a3e635" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: '#ffffff' }}>
                Projects Will Be Added Soon
              </h3>
              <p style={{ color: '#a3a3a3', fontSize: '0.95rem', marginBottom: '20px' }}>
                I am currently curating my personal projects and source code. They will be displayed here soon!
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-block',
                  padding: '10px 18px',
                  background: '#a3e635',
                  color: '#0a0a0a',
                  borderRadius: '3px',
                  fontWeight: 600,
                  fontSize: '12px',
                  textDecoration: 'none',
                }}
              >
                Contact Me For Inquiries
              </Link>
            </div>
          )}
        </div>
      </section>

    {/* ================= GORGEOUS & ERROR-FREE CALL TO ACTION BANNER ================= */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 110px) 0',
          
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #252C35',
        }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div
            style={{
              position: 'relative',
              background: '#10141A1',
              border: '1px solid #252C35',
              borderRadius: '8px',
              padding: 'clamp(40px, 7vw, 72px) clamp(24px, 5vw, 60px)',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            }}
          >
            {/* CORNER ACCENT BORDERS */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '40px',
                height: '40px',
                borderTop: '2px solid #a3e635',
                borderLeft: '2px solid #a3e635',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '40px',
                height: '40px',
                borderBottom: '2px solid #a3e635',
                borderRight: '2px solid #a3e635',
              }}
            />

            {/* SOFT LIME GLOW IN BACKGROUND */}
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '450px',
                height: '450px',
                background: 'radial-gradient(circle, #10141A )',
                pointerEvents: 'none',
                filter: 'blur(50px)',
              }}
            />

            {/* GRID CONTENT */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: 'clamp(32px, 5vw, 60px)',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* LEFT COLUMN */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    background: '#10141A',
                    border: '1px solid #252C35',
                    color: '#a3e635',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '24px',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#a3e635',
                      boxShadow: '0 0 10px #a3e635',
                    }}
                  />
                  Let's Build Together
                </div>

                <h2
                  style={{
                    margin: '0 0 20px',
                    fontSize: 'clamp(32px, 5vw, 58px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.05em',
                    fontWeight: 750,
                    color: '#ffffff',
                  }}
                >
                  Have an opening or a <br />
                  <span style={{ color: '#a3a3a3' }}>project idea</span>
                  <span style={{ color: '#a3e635' }}>?</span>
                </h2>

                <div
                  style={{
                    width: '54px',
                    height: '2px',
                    background: '#a3e635',
                    marginBottom: '24px',
                  }}
                />

                <p
                  style={{
                    maxWidth: '480px',
                    margin: 0,
                    color: '#a3a3a3',
                    fontSize: '15px',
                    lineHeight: 1.85,
                  }}
                >
                  I am open to Junior Front-End Developer roles, internships, and freelance contracts. Let's connect and discuss how I can add value to your team.
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div
                style={{
                  background: '#10141A',
                  border: '1px solid #252C35',
                  borderRadius: '6px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '2px',
                      color: '#737373',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    AVAILABLE FOR HIRE
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      color: '#a3e635',
                      letterSpacing: '1px',
                      fontWeight: 600,
                    }}
                  >
                    ● 100% ONLINE
                  </span>
                </div>

                {/* PRIMARY BUTTON */}
                <Link
                  to="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 22px',
                    background: '#a3e635',
                    color: '#0a0a0a',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.3px',
                  }}
                >
                  <span>Get In Touch</span>
                  {/* Inline Safe Paper Plane SVG */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </Link>

                {/* SECONDARY BUTTON */}
                <Link
                  to="/about"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '15px 22px',
                    border: '1px solid #252C35',
                    background: '#10141A',
                    color: '#ffffff',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  <span>Read My Story</span>
                  {/* Inline Safe Arrow Right SVG */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#a3e635">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </Link>

                {/* FOOTER METRICS */}
                <div
                  style={{
                    marginTop: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid #1a1a1a',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '11px',
                    color: '#737373',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>Response Time</span>
                  <span style={{ color: '#e5e5e5', fontWeight: 600 }}>&lt; 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;