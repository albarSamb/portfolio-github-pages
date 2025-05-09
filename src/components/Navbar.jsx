import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Albar SAMB Portfolio</h1>
      <ul>
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;