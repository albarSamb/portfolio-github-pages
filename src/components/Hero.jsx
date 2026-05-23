import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';
import '../App.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Portrait de Albar SAMB" className="profile-pic" />

        <h2>
          {t('hero.title')} <span className='my_name'>{t('hero.name')}</span>
        </h2>

        <p className="p1">
          {t('hero.subtitle')}
        </p>

        <p>
          {t('hero.description1')}
        </p>

        <p>
          {t('hero.description2')}
        </p>

        <a
          href={`${import.meta.env.BASE_URL}AlbarSAMB_AI_Engineer.pdf`}
          download="AlbarSAMB_AI_Engineer.pdf"
          className="cv-download-btn"
        >
          <FaDownload /> {t('hero.downloadCV')}
        </a>
      </div>
    </section>
  );
}

export default Hero;
