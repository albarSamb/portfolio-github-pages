import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#hero" onClick={closeMenu}>
            <img src={`${import.meta.env.BASE_URL}icone.png`} alt="AS_port" className="logo-img" />
            <span className="logo-text">
              <Typewriter words={['AS']} loop={1} cursor />
            </span>
          </a>
        </div>

        <div className="navbar-center">
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a href="#hero" className="nav-link" onClick={closeMenu}>
                {t('navbar.home')}
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>
                {t('navbar.skills')}
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link" onClick={closeMenu}>
                {t('navbar.experience')}
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMenu}>
                {t('navbar.projects')}
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                {t('navbar.contact')}
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="language-toggle" onClick={toggleLanguage}>
            {i18n.language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </button>
          
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;