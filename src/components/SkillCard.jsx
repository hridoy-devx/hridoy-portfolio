
import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaChrome,
  FaCode,
  FaMobileAlt,
  FaRoute,
  FaExchangeAlt,
  FaIcons,
  FaLayerGroup,
  FaPalette,
  FaRocket,
  FaArrowUp
} from 'react-icons/fa';

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaChrome,
  FaCode,
  FaMobileAlt,
  FaRoute,
  FaExchangeAlt,
  FaIcons,
  FaLayerGroup,
  FaPalette,
  FaRocket
};

const SkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.icon] || FaCode;

  const accent = '#A3E635';

  return (
    <article
      className="premium-skill-card"
      style={{
        position: 'relative',
        minWidth: 0,
        padding: '24px',
        background: '#10141A',
        border: '1px solid #252C35',
        borderRadius: '5px',
        transition:
          'border-color 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#292929';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* TOP ROW */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          marginBottom: '30px',
        }}
      >
        <span
          style={{
            color: '#737373',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '1.8px',
          }}
        >
          TECH / SKILL
        </span>

        <FaArrowUp
          size={13}
          style={{
            color: accent,
            transform: 'rotate(45deg)',
          }}
        />
      </div>

      {/* ICON AND NAME */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          minWidth: 0,
          marginBottom: '28px',
        }}
      >
        <div
          style={{
            width: '52px',
            height: '52px',
            flexShrink: 0,
            display: 'grid',
            placeItems: 'center',
            border: '1px solid #252C35',
            borderRadius: '5px',
            background: '#10141A',
            color: skill.color || accent,
          }}
        >
          <IconComponent size={25} />
        </div>

        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              margin: '0 0 7px',
              color: '#ffffff',
              fontSize: '17px',
              fontWeight: 650,
              lineHeight: 1.35,
              overflowWrap: 'anywhere',
            }}
          >
            {skill.name}
          </h3>

          <span
            style={{
              color: '#858585',
              fontSize: '12px',
              lineHeight: 1.5,
            }}
          >
            {skill.badge || 'Technical Skill'}
          </span>
        </div>
      </div>

      {/* PROFICIENCY */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '11px',
        }}
      >
        <span
          style={{
            color: '#858585',
            fontSize: '11px',
            letterSpacing: '0.5px',
          }}
        >
          Proficiency
        </span>

        <span
          style={{
            color: accent,
            fontSize: '13px',
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: '100%',
          height: '3px',
          overflow: 'hidden',
          background: '#303030',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            width: `${Math.min(100, Math.max(0, Number(skill.level) || 0))}%`,
            height: '100%',
            background: accent,
            borderRadius: '10px',
            transition: 'width 0.7s ease',
          }}
        />
      </div>
    </article>
  );
};

export default SkillCard;
