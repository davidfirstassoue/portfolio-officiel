"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Expérience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            {profileData.name}<span>.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <button 
                onClick={toggleTheme} 
                className="theme-toggle" 
                aria-label="Changer de thème"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <div className="nav-socials">
                <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={18} />
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="nav-mobile-buttons">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label="Changer de thème"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-toggle"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-socials">
          <a href={profileData.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={24} />
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={24} />
          </a>
          <a href={`mailto:${profileData.email}`}>
            <Mail size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
