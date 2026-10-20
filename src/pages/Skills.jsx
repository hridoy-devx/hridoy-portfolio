import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Filter categories if tab is selected
  const displayedCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeTab);

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
        <div style={{ maxWidth: '620px', marginBottom: '44px' }}>
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
            02 / Technical Expertise
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
            Skills & <br />
            <span style={{ color: '#a3a3a3' }}>Tooling</span>
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
            A comprehensive overview of my front-end toolkit, frameworks, and developer workflows.
          </p>
        </div>

        {/* FILTER TABS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          <button
            onClick={() => setActiveTab('All')}
            style={{
              padding: '10px 20px',
              borderRadius: '3px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              cursor: 'pointer',
              background: activeTab === 'All' ? '#a3e635' : '#10141A',
              color: activeTab === 'All' ? '#0a0a0a' : '#a3a3a3',
              border: activeTab === 'All' ? '1px solid #a3e635' : '1px solid #252C35',
              transition: 'all 0.2s ease',
            }}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              style={{
                padding: '10px 20px',
                borderRadius: '3px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                cursor: 'pointer',
                background: activeTab === cat.category ? '#a3e635' : '#10141A',
                color: activeTab === cat.category ? '#10141A' : '#a3a3a3',
                border: activeTab === cat.category ? '1px solid #a3e635' : '1px solid #252C35',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* RENDER SKILL GROUPS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
          {displayedCategories.map((group) => (
            <div key={group.category}>
              {/* GROUP HEADER */}
              <div
                style={{
                  marginBottom: '22px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #252C35',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: '0 0 6px',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {group.category}
                  </h2>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#a3a3a3',
                      margin: 0,
                    }}
                  >
                    {group.description}
                  </p>
                </div>

                <span
                  style={{
                    fontSize: '11px',
                    color: '#a3e635',
                    fontWeight: 600,
                    letterSpacing: '1px',
                  }}
                >
                  {group.skills.length} ITEMS
                </span>
              </div>

              {/* SKILLS GRID */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                  gap: '16px',
                }}
              >
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CONTINUOUS LEARNING NOTE */}
        <div
          style={{
            marginTop: '64px',
            padding: '32px 28px',
            background: '#10141A',
            border: '1px solid #252C35',
            borderRadius: '6px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '3px',
              height: '100%',
              background: '#a3e635',
            }}
          />

          <div
            style={{
              fontSize: '10px',
              letterSpacing: '2px',
              color: '#a3e635',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '8px',
            }}
          >
            ALWAYS EVOLVING
          </div>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 8px',
            }}
          >
            Continuous Learning & Future Stack
          </h3>

          <p
            style={{
              color: '#a3a3a3',
              fontSize: '14px',
              lineHeight: 1.8,
              margin: 0,
              maxWidth: '720px',
            }}
          >
            Currently expanding into TypeScript, Next.js, Tailwind CSS, and advanced state management patterns (Zustand/Redux Toolkit) to elevate my front-end capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;