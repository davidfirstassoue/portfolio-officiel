"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projectsData, Project } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState<string>("Tous");

  const categories = ["Tous", "Next.js", "React", "TypeScript", "Node.js"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "Tous") return true;
    return project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase());
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">
          Une sélection de mes travaux récents. Chaque projet représente un défi technique relevé et une expérience utilisateur soignée.
        </p>

        {/* Filter Buttons */}
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card project-card"
              >
                {/* Visual placeholder or Live Preview for Project Images */}
                <div className="project-img-container">
                  {project.previewMode === "image" && project.image ? (
                    <img 
                      src={project.image} 
                      alt={`Aperçu de ${project.title}`} 
                      className="project-image"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : project.liveUrl ? (
                    <>
                      <iframe
                        src={project.liveUrl}
                        title={`Aperçu de ${project.title}`}
                        className="project-iframe"
                        scrolling="no"
                        tabIndex={-1}
                      />
                      <div className="project-iframe-overlay" />
                    </>
                  ) : (
                    <div className="project-img-placeholder">
                      <Code size={40} />
                      <span>{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <GithubIcon size={16} /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        style={{ marginLeft: "auto" }}
                      >
                        Demo Live <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
