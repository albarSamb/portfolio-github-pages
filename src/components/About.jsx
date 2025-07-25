import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const skills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "PHP", level: 75 },
  { name: "Python", level: 85 },
  { name: "Machine Learning", level: 65 },
  { name: "C#", level: 75 },
  { name: "C/C++", level: 65 },
  { name: "Java / JEE", level: 55 },
  { name: "Flutter / Dart", level: 55 },
  { name: "Git / Docker", level: 65 },
  { name: "PostgreSQL / MySQL", level: 80 },
];

function About() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          const index = skillRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    skillRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
  
        // 👉 Détection manuelle des éléments déjà visibles au chargement
        const rect = el.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          const index = skillRefs.current.indexOf(el);
          setVisibleIndexes(prev => [...new Set([...prev, index])]);
        }
      }
    });
  
    return () => {
      skillRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);  

return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        <h2>À propos de moi</h2>
        <p>Voici un aperçu de mes compétences techniques :</p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-bar"
              ref={el => (skillRefs.current[index] = el)}
            >
              <div className="skill-title">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: visibleIndexes.includes(index)
                      ? `${skill.level}%`
                      : '0%',
                  }}
                >
                  {visibleIndexes.includes(index) && <span>{skill.level}%</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;