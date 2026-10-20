import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <article
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
        background: '#10141A',
        border: '1px solid #252C35',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          overflow: 'hidden',
          backgroundColor: '#10141A',
        }}
      >
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
          }}
        />

        <span
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: '#10141A',
            border: '1px solid #252C35',
            color: '#a3e635',
            backdropFilter: 'blur(8px)',
          }}
        >
          {project.category}
        </span>
      </div>

      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            margin: '0 0 10px',
            color: '#ffffff',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.92rem',
            color: '#a3a3a3',
            margin: '0 0 18px',
            lineHeight: 1.55,
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '7px',
            marginBottom: '20px',
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '6px',
                background: '#10141A',
                color: '#a3e635',
                border: '1px solid #252C35',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingTop: '14px',
            borderTop: '1px solid #262626',
          }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                flex: 1,
                padding: '8px 14px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#10141A',
                color: '#a3a3a3',
                border: '1px solid #252C35',
                textDecoration: 'none',
              }}
            >
              <FaGithub size={15} />
              Code
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                flex: 1,
                padding: '8px 14px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#a3e635',
                color: '#0a0a0a',
                border: '1px solid #a3e635',
                textDecoration: 'none',
              }}
            >
              <FaExternalLinkAlt size={13} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;