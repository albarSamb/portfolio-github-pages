import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../App.css';
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "Collecte de données sur le Smishing",
    description: "Infrastructure low-cost pour la collecte et l’analyse de SMS suspects qui va nous permettre de detecter les cas de smishing à l'avenir.",
    image: "/smishing.png",
    tech: ["IA","Raspberry Pi", "Linux", "IoT"],
    link: "https://github.com/albarSamb/Infrastructe-low-cost-de-Collecte-de-donn-es-sur-le-Smishing"
  },
  {
    title: "Création d’une boutique en ligne pour la vente de produits en utilisant C# et la technologie ASP.NET",
    description: "Boutique en ligne développée en C# et ASP.NET avec inscription/authentification, gestion de profils, affichage/filtrage de produits, panier, paiement Stripe et factures. Données via API REST, stockées avec Entity Framework Core.(En binôme)",
    image: "/Ecommerce.png",
    tech: ["React","C#", "ASP.NET Web API", "Entity Framework","Stripe.net "],
    link: "https://github.com/Birame-Owens/ECommerceBoutique"
  },
  {
    title: "App Web de gestion d'Emplois du temps",
    description: "Application de gestion des emplois du temps et salles de la Section Informatique.",
    image: "/edt.png",
    tech: ["PHP", "jQuery", "Ajax"],
    link: "https://github.com/albarSamb/gestionEDT"
  },
  {
    title: "Système d'inscription/connexion (C++)",
    description: "Système simple d’authentification via le terminal.",
    image: "/cpp.png",
    tech: ["C++"],
    link: "https://github.com/albarSamb/Systeme_Inscription_Connexion_CPP"
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projets Réalisés</h2>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3 
          }
        }}
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            <div className="project-card glass">
              <img
                src={`${process.env.PUBLIC_URL}${proj.image}`}
                alt={proj.title}
                className="project-img"
              />
              <h3 style={{color:'black'}}>{proj.title}</h3>
              <p style={{color:'black'}}>{proj.description}</p>
              <p className='outils'><strong>Outils :</strong> {proj.tech.join(', ')}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>Voir plus sur mon GitHub: <a href="https://github.com/albarSamb">&nbsp;&nbsp;<BsGithub /></a></p>
    </section>
  );  
}

export default Projects;
