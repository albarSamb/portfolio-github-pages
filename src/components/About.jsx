import React from 'react';
import './About.css';

const skills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Express.js", level: 80},
  { name: "PHP", level: 75 },
  { name: "Python", level: 85 },
  { name: "Machine Learning", level: 55 },
  { name: "C", level: 65 },
  { name: "C++", level: 75 },
  { name: "Java / JEE", level: 55 },
  { name: "Flutter / Dart", level: 55 },
  { name: "Git / Docker", level: 65 },
  { name: "PostgreSQL / MySQL", level: 80 },
];

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        <h2>À propos de moi</h2>
        <p>Voici un aperçu de mes compétences techniques :</p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <div className="skill-title">{skill.name}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}>
                  <span>{skill.level}%</span>
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
