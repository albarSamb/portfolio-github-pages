import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content" data-aos="fade-up">
        <img src="/my_photo.jpg" alt="Portrait de Albar SAMB" className="profile-pic" />
        
        <h2 data-aos="fade-right">
          Salut, je suis <span className='my_name'>Albar SAMB</span>.<p className="p1">Bienvenue sur mon portfolio interactif !!!</p>
          
          <span style={{ color: '#ff0000', fontWeight: 'bold' }}>
            <Typewriter
              words={[
                'Cofondateur de 4TheTech',
                'Développeur Fullstack ',
                'Entrepreneur Tech Visionnaire 🔥',
                'Futur Ingénieur IA/ML',
              ]}
              loop={0} // 0 = infini
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <br /> <br />

        <p data-aos="slide-left" className="p1">
          🤖 Futur Ingénieur IA/ML | 🚀 Créateur d’Impact
        </p>

        <p>
          Je suis un développeur fullstack passionné, avec une solide base en conception et développement d’applications web. 
          Actuellement étudiant en Master 1 SIR, je mène des projets académiques et personnels complexes tout en construisant mon avenir 
          autour des technologies émergentes comme l’intelligence artificielle et l’IoT.
        </p>

        <p>
          Animé par l’ambition de devenir un ingénieur logiciel spécialisé en Intelligence Artificielle et Machine Learning (IA/ML), 
          je me forme activement à Python, au Machine Learning et aux concepts de deep learning.
        </p>
      </div>
    </section>
  );
}

export default Hero;
