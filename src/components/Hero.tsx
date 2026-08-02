"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Briefcase, Mail } from "lucide-react";
import { profileData } from "@/data/portfolio";

interface CounterProps {
  value: number;
  duration?: number;
}

function Counter({ value, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const frameRate = 60;
    const totalFrames = Math.round(totalMiliseconds / (1000 / frameRate));
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // cubic ease out
      
      const currentCount = Math.round(easedProgress * end);
      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <>{count}</>;
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Custom ease-out
      },
    },
  };

  const stats = [
    { num: 5, suffix: "+", label: "Années d'expérience" },
    { num: 20, suffix: "+", label: "Projets terminés" },
    { num: 99, suffix: "%", label: "Clients satisfaits" },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="hero-badge-dot" />
              Disponible pour de nouveaux projets
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Salut, je suis <br />
              <span>{profileData.name}</span>
            </motion.h1>

            <motion.h2 
              className="hero-role" 
              variants={itemVariants}
              style={{
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "16px",
                fontFamily: "var(--font-heading)"
              }}
            >
              {profileData.role}
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
              {profileData.tagline}
            </motion.p>

            <motion.div className="hero-btns" variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">
                Me contacter <Mail size={18} />
              </a>
              <a href="#projects" className="btn btn-secondary">
                Voir mes travaux <ArrowUpRight size={18} />
              </a>
            </motion.div>

            <motion.div className="hero-stats" variants={itemVariants}>
              {stats.map((stat, i) => (
                <div className="stat-item" key={i}>
                  <span className="stat-num">
                    <Counter value={stat.num} />
                    {stat.suffix}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="hero-avatar-card">
              <div className="hero-avatar-placeholder">
                {profileData.name[0]}
              </div>
              
              {/* Floating UX Card */}
              <div className="floating-card">
                <div className="floating-card-icon">
                  <Award size={20} />
                </div>
                <div className="floating-card-info">
                  <span className="floating-card-title">UI/UX Design</span>
                  <span className="floating-card-subtitle">Designs Premium</span>
                </div>
              </div>
              
              {/* Floating Code Card */}
              <div 
                className="floating-card" 
                style={{ 
                  bottom: "auto", 
                  top: "24px", 
                  right: "auto", 
                  left: "-24px",
                  animation: "float 6s ease-in-out infinite alternate" 
                }}
              >
                <div className="floating-card-icon" style={{ background: "var(--primary-glow)", color: "var(--primary)" }}>
                  <Briefcase size={20} />
                </div>
                <div className="floating-card-info">
                  <span className="floating-card-title">Full-Stack</span>
                  <span className="floating-card-subtitle">Projets fiables</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
