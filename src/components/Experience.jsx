import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const experiences = [
  {
    key: "skipper",
    role: "AI Engineer",
    company: "SKIPPER NDT",
    tech: ["PyTorch", "Python", "Computer Vision", "ML"],
  },
];

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience-section" data-aos="fade-up">
      <div className="experience-container">
        <h2>{t('experience.title')}</h2>
        <div className="timeline">
          {experiences.map((exp) => {
            const bullets = t(`experience.items.${exp.key}.bullets`, { returnObjects: true });
            return (
              <div key={exp.key} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-period">{t(`experience.items.${exp.key}.period`)}</span>
                  </div>
                  <p className="exp-company">
                    {exp.company} — <span className="exp-context">{t(`experience.items.${exp.key}.context`)}</span>
                  </p>
                  <p className="exp-duration">{t(`experience.items.${exp.key}.duration`)}</p>
                  <ul className="exp-bullets">
                    {Array.isArray(bullets) && bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="exp-tech">
                    {exp.tech.map((tag, i) => (
                      <span key={i} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
