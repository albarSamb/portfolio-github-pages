import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projets Réalisés</h2>
      <div className="project-list">
        <div className="project">
          <h3>Infrastructure à faible coût pour collecte de données sur le smishing</h3>

          <p>Projet en systèmes embarqués, réseaux mobiles et cybersécurité, avec une forte composante d'infrastructure logicielle et matérielle low-cost pour la collecte et l’analyse de SMS suspects dans le cadre d'études sur le smishing.</p>
        </div>
        <div className="project">
          <h3>Application Web de gestion d'emplois du temps (PHP, jQuery, Ajax)</h3>
          <p>Ce projet consiste à mettre en place une appliaction de gestion d'emploi du temps pour une école. Avec la gestion des volumes horaires, des salles de classes, des étudiants...</p>
        </div>
        <div className="project">
          <h3>Voir plus sur mon compte GitHub :</h3>
          <a href="https://github.com/albarSamb" target="_blank" rel="noopener noreferrer">Mon GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
