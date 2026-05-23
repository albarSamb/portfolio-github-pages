import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../App.css';
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    key: "rag",
    image: "/rag.png",
    tech: ["FastAPI", "ChromaDB", "LLM", "PostgreSQL", "Python"],
    link: "https://github.com/albarSamb/rag-assistant"
  },
  {
    key: "bichette",
    image: "/bichette.png",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Stripe", "Claude API", "Docker", "Vue.js 3"],
    link: "https://github.com/Birame-Owens/bichete-thomas",
    liveLink: "https://bichettethomas.site/"
  },
  {
    key: "sentiment",
    image: "/sentiment.jpg",
    tech: ["PyTorch", "NLP", "Python", "NumPy", "Pandas"],
    link: "https://github.com/albarSamb/Sentiment_analysis_with_PyTorch"
  },
  {
    key: "smishing",
    image: "/smishing.png",
    tech: ["IA", "Raspberry Pi", "Linux", "IoT"],
    link: "https://github.com/albarSamb/Infrastructe-low-cost-de-Collecte-de-donn-es-sur-le-Smishing"
  },
  {
    key: "ecommerce",
    image: "/Ecommerce.png",
    tech: ["React", "C#", "ASP.NET Web API", "Entity Framework", "Stripe"],
    link: "https://github.com/Birame-Owens/ECommerceBoutique"
  },
];

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <h2>{t('projects.title')}</h2>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        grabCursor={false}
        centeredSlides={true}
        preventClicks={false}
        preventClicksPropagation={false}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {projects.map((proj) => (
          <SwiperSlide key={proj.key}>
            <div className="project-card glass">
              <img
                src={`${import.meta.env.BASE_URL}${proj.image.replace(/^\//, '')}`}
                alt={t(`projects.items.${proj.key}.title`)}
                className="project-img"
              />
              <h3>{t(`projects.items.${proj.key}.title`)}</h3>
              <p>{t(`projects.items.${proj.key}.description`)}</p>
              <p className='outils'><strong>{t('projects.tools')}:</strong> {proj.tech.join(', ')}</p>
              <div className="project-links">
                {proj.liveLink && (
                  <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-live" onClick={e => e.stopPropagation()}>
                    <FaExternalLinkAlt /> {t('projects.visitSite')}
                  </a>
                )}
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link-github" onClick={e => e.stopPropagation()}>
                  {t('projects.viewGithub')}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>{t('projects.seeMore')}: <a href="https://github.com/albarSamb">&nbsp;&nbsp;<BsGithub /></a></p>
    </section>
  );
}

export default Projects;
