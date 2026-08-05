"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/data/portfolio";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3d82e4bc-eb50-4057-818f-0c5d29f6b8c8");
    // Optionnel: on peut ajouter un sujet par défaut si on veut
    formData.append("subject", "Nouveau message depuis le Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus("success");
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Me Contacter</h2>
        <p className="section-subtitle">
          Vous avez un projet en tête, une opportunité ou simplement envie d'échanger ? N'hésitez pas à m'envoyer un message !
        </p>

        <div className="contact-grid">
          {/* Contact Details */}
          <motion.div
            className="contact-card-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="floating-card-icon" style={{ background: "var(--primary-glow)", color: "var(--primary)", width: "40px", height: "40px" }}>
                <MessageSquare size={20} />
              </div>
              <h3 className="contact-info-title">Mes coordonnées</h3>
            </div>
            <p className="contact-info-desc">
              Je réponds généralement sous 24 à 48 heures. Retrouvez-moi également sur mes différents réseaux sociaux.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="contact-text-wrapper">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${profileData.email}`} className="contact-val">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="contact-text-wrapper">
                  <span className="contact-label">Localisation</span>
                  <span className="contact-val">{profileData.location}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <span className="contact-label">Suivez-moi</span>
              <div className="contact-socials-row">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-btn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-input-label">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input-control"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-input-label">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input-control"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-input-label">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="form-input-control"
                  placeholder="Le sujet de votre message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-input-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="form-input-control"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ alignSelf: "flex-start", marginTop: "10px" }}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                <Send size={16} />
              </button>

              {submitStatus === "success" && (
                <div 
                  style={{ 
                    padding: "12px 16px", 
                    borderRadius: "var(--radius-sm)", 
                    background: "rgba(16, 185, 129, 0.1)", 
                    color: "#10b981", 
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginTop: "10px"
                  }}
                >
                  Message envoyé avec succès ! Merci de me contacter.
                </div>
              )}

              {submitStatus === "error" && (
                <div 
                  style={{ 
                    padding: "12px 16px", 
                    borderRadius: "var(--radius-sm)", 
                    background: "rgba(239, 68, 68, 0.1)", 
                    color: "#ef4444", 
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginTop: "10px"
                  }}
                >
                  Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou m'envoyer un email directement.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
