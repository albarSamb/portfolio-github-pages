import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="slide-right">
      <h2>Contacts</h2>
      <p><IoIosMail/> &nbsp;: <a href="mailto:albarsamb1@gmail.com" target="_blank" rel="noopener noreferrer">albarsamb1@gmail.com</a></p>
      <p><FaLinkedin/> &nbsp;: <a href="https://www.linkedin.com/in/albar-samb-81a4182a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Mon LinkedIn</a></p>
      <p> <BsGithub/> &nbsp;: <a href="https://github.com/albarSamb" target="_blank" rel="noopener noreferrer">Mon GitHub</a></p>
    </section>
  );
}

export default Contact;
