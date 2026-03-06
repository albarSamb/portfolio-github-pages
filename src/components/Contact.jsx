import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container">
        <h2>{t('contact.title')}</h2>
        <p className="contact-intro">{t('contact.intro')}</p>
        
        <div className="contact-grid">
          {/* Email */}
          <div className="contact-card">
            <div className="contact-icon email-icon">
              <FaEnvelope />
            </div>
            <h3>{t('contact.email')}</h3>
            <a 
              href="mailto:albarsamb1@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              albarsamb1@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-card">
            <div className="contact-icon linkedin-icon">
              <FaLinkedin />
            </div>
            <h3>{t('contact.linkedin')}</h3>
            <a 
              href="https://www.linkedin.com/in/albar-samb-81a4182a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              {t('contact.visitProfile')}
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-card">
            <div className="contact-icon github-icon">
              <BsGithub />
            </div>
            <h3>{t('contact.github')}</h3>
            <a 
              href="https://github.com/albarSamb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              {t('contact.seeProjects')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
