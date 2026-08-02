"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experienceData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Parcours & Expérience</h2>
        <p className="section-subtitle">
          Mon parcours professionnel en tant que développeur, marqué par un apprentissage continu et une volonté de concevoir des produits de qualité.
        </p>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-dot" />
              
              <div className="glass-card timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                
                <ul className="timeline-body">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <div className="timeline-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="timeline-skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
