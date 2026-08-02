"use client";

import { profileData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Expérience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <a href="#home" className="footer-logo">
          {profileData.name}<span>.</span>
        </a>

        <p className="footer-text">
          &copy; {currentYear} {profileData.name}. Tous droits réservés. Conçu avec Next.js et Vanilla CSS.
        </p>

        <ul className="footer-links">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="footer-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
