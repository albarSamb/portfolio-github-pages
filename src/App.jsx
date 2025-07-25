import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2300, // Durée de l'animat° 
      once: true      // Animation uniquement à la first apparition
    });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
