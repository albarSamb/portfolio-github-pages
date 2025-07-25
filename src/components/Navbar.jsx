import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 style={{fontSize:'15px', color: '#00d4ff'}}>
        <a href="#hero" style={{textDecoration:'none'}}>
          <img src={`${process.env.PUBLIC_URL}/icone.png`} alt="AS_port" style={{maxHeight:'18px'}}/> &nbsp;
              <span style={{ color: '#00d4ff', fontWeight: 'bold' }}>
                          <Typewriter
                            words={[
                              'Mon Portfolio !!!'
                            ]}
                            // loop={0} // 0 = infini
                            // cursor
                            // cursorStyle="|"
                            // typeSpeed={70}
                            // deleteSpeed={60}
                            // delaySpeed={1500}
                    />
                </span>
          </a>
        </h1>

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