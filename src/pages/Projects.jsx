import React, { useState, useMemo } from 'react';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';
import { FaClock, FaCodeBranch, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const displayedProjects = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  return (
    <div
      style={{
       
        color: '#ffffff',
        padding: 'clamp(60px, 8vw, 100px) 0',
        minHeight: 'calc(100vh - 76px)',
      }}
    >
      <div className="container">
        {/* Section Header - Matching Homepage Style */}
        <div style={{ maxWidth: '650px', marginBottom: '50px' }}>
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
            04 / Portfolio Archive
          </div>

          <h1
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
            Projects <br />
            <span style={{ color: '#737373' }}>showcase</span>
            <span style={{ color: '#a3e635' }}>.</span>
          </h1>

          <p
            style={{
              margin: 0,
              color: '#a3e635',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              lineHeight: 1.9,
            }}
          >
            Explore my work, front-end builds, and responsive web applications. Add your personal projects anytime in <code style={{ color: '#a3e635', background: '#171717', padding: '2px 6px', borderRadius: '4px' }}>projects.js</code>.
          </p>
        </div>

        {/* If projects exist, show categories, list and pagination */}
        {projects.length > 0 ? (
          <>
            {/* Category Filters Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '36px',
                borderBottom: '1px solid #262626',
                paddingBottom: '24px',
              }}
            >
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    background:
                      selectedCategory === category
                        ? '#a3e635'
                        : '#121212',
                    color: selectedCategory === category ? '#0a0a0a' : '#a3a3a3',
                    border:
                      selectedCategory === category
                        ? '1px solid #a3e635'
                        : '1px solid #262626',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Project Count Indicator */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px',
                color: '#737373',
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              <span>
                Showing <strong style={{ color: '#ffffff' }}>{displayedProjects.length}</strong> of{' '}
                <strong style={{ color: '#ffffff' }}>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
              </span>
              <span>
                Page <strong style={{ color: '#ffffff' }}>{currentPage}</strong> of <strong style={{ color: '#ffffff' }}>{totalPages || 1}</strong>
              </span>
            </div>

            {/* Projects Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px',
              }}
            >
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* React Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 320, behavior: 'smooth' });
              }}
            />
          </>
        ) : (
          /* Placeholder Card when no projects are listed yet */
          <div
            style={{
              background: '#111111',
              border: '1px dashed #333333',
              borderRadius: '8px',
              padding: '80px 24px',
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(163, 230, 53, 0.08)',
                border: '1px solid rgba(163, 230, 53, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#a3e635',
              }}
            >
              <FaClock size={28} />
            </div>

            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              Projects Will Be Added Soon
            </h2>

            <p
              style={{
                color: '#a3a3a3',
                fontSize: '0.95rem',
                maxWidth: '480px',
                margin: '0 auto 24px',
                lineHeight: 1.7,
              }}
            >
              I am currently preparing and curating my personal front-end projects, live demos, and source code to showcase here. Stay tuned!
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '4px',
                background: '#181818',
                border: '1px solid #262626',
                color: '#a3e635',
                fontSize: '0.85rem',
              }}
            >
              <FaCodeBranch size={13} />
              <span>src/data/projects.js</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;