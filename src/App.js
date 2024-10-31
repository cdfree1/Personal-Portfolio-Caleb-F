import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProjectSlide from './components/ProjectSlide';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const projects = [
  {
    title: "Project 1",
    description: "Project 1 description...",
    image: "/progress.jpg",
    link: "#"
  },
  {
    title: "Project 2",
    description: "Project 2 description...",
    image: "/progress.jpg",
    link: "#"
  },
  {
    title: "Project 3",
    description: "Project 3 description...",
    image: "/progress.jpg",
    link: "#"
  }
];

function App() {
  return (
    <div className="Personal-Portfolio">
      <Navbar />
      <header className="Portfolio-Header" id="home">
        <img src="/headshot.jpg" alt="Caleb Free" className="headshot"/>
      </header>
      <section id="about">
        <p>
          Hi I'm <span className="Name">Caleb</span>, a computer science student at the University of North Carolina Chapel Hill. On this page, 
          you can check out the work I've done, feel free to reach out to me through the sources below.
        </p>
      </section>
      <section id="projects">
        <h2>My Work</h2>
        <ProjectSlide projects={projects} />
      </section>
      <section id="contact">
        <h2 className="contactme">Contact Me</h2>
        <div className="contact-icons">
          <a href="mailto:calebdfree@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/caleb-free-7aa842249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://www.instagram.com/caleb_free3.0/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://github.com/cdfree1" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        </div>
      </section>
    </div>
  );
}

export default App;