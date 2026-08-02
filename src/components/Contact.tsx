"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
