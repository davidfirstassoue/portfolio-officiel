"use client";

import { motion } from "framer-motion";
import { User, Code, Server, Wrench, Shield } from "lucide-react";
import { profileData, skillsData, Skill } from "@/data/portfolio";

export default function About() {
  const categories = {
    frontend: { title: "Frontend Development", icon: <Code size={20} /> },
    backend: { title: "Backend Development", icon: <Server size={20} /> },
    tools: { title: "Outils & DevOps", icon: <Wrench size={20} /> },
    other: { title: "Autres expertises", icon: <Shield size={20} /> }
  };

  const getSkillsByCategory = (cat: 'frontend' | 'backend' | 'tools' | 'other') => {
    return skillsData.filter(skill => skill.category === cat);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">À Propos</h2>
        <p className="section-subtitle">
          Découvrez mon parcours, mes motivations et les compétences techniques que je mets au service de vos projets.
        </p>

        <div className="about-grid">
          {/* Bio info */}
          <motion.div 
            className="glass-card about-info-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div className="floating-card-icon" style={{ background: "var(--primary-glow)", color: "var(--primary)", width: "40px", height: "40px" }}>
                <User size={20} />
              </div>
              <h3 className="about-info-title">Qui suis-je ?</h3>
            </div>
            
            <p>{profileData.bio}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px", borderTop: "1px solid var(--border-color)", paddingTop: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Localisation :</span>
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{profileData.location}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Email :</span>
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{profileData.email}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Langues :</span>
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Français (Langue maternelle), Anglais (Technique)</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <div className="skills-wrapper">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((catKey) => {
              const cat = categories[catKey];
              const skills = getSkillsByCategory(catKey);
              
              return (
                <motion.div 
                  key={catKey}
                  className="skills-category"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="skills-category-title">
                    <span style={{ color: "var(--primary)" }}>{cat.icon}</span>
                    {cat.title}
                  </h4>
                  
                  <div className="skills-list">
                    {skills.map((skill) => (
                      <span key={skill.name} className="skill-tag">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
