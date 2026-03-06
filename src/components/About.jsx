import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
import { FaJsSquare, FaReact, FaNode, FaPython, FaJava, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiGithub, SiCplusplus, SiScikitlearn, SiExpress, SiGitlab, SiFastapi, SiVuedotjs, SiTypescript, SiTailwindcss, SiRedis, SiApachespark, SiApachekafka, SiApacheairflow, SiPytorch, SiPostgresql, SiNumpy, SiPandas } from 'react-icons/si';
import { TbBrandCSharp, TbSql } from "react-icons/tb";

const skillsGroups = [
  {
    categoryKey: "about.languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C#", icon: <TbBrandCSharp /> },
      { name: "C / C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
    ]
  },
  {
    categoryKey: "about.aiml",
    skills: [
      { name: "RAG / Embeddings", icon: <FaPython /> },
{ name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ]
  },
  {
    categoryKey: "about.backend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "SQLAlchemy", icon: <FaDatabase /> },
    ]
  },
  {
    categoryKey: "about.frontend",
    skills: [
      { name: "Vue.js 3", icon: <SiVuedotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ]
  },
  {
    categoryKey: "about.bigdata",
    skills: [
      { name: "Apache Spark", icon: <SiApachespark /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Airflow", icon: <SiApacheairflow /> },
    ]
  },
  {
    categoryKey: "about.databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "SQL", icon: <TbSql /> },
    ]
  },
  {
    categoryKey: "about.tools",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub Actions", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
    ]
  },
];

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        <h2>{t('about.title')}</h2>
        <p>{t('about.intro')}</p>
        <div className="skills-groups-container">
          {skillsGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="skills-group">
              <h3 className="group-title">{t(group.categoryKey)}</h3>
              <div className="skills-grid">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;
