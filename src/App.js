import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProjectSlide from './components/ProjectSlide';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import headshot from './headshot.jpg';
import BooklyAI  from './Bookly-AI.png';

const projects = [
  {
    title: "Bookly AI",
    description: "Bookly AI is a web application that utilizes OpenAI's API to take an image of a book from a user and return detailed information about it. The app uses Next.js for a responsive and dynamic front-end, ensuring a smooth user experience. The image is sent to the back-end, built with FastAPI, where it is processed and analyzed through OpenAI's image recognition capabilities. The extracted data includes the book's title, author, genre, and a brief synopsis, all delivered instantly to the user. This seamless integration of front-end and back-end technologies offers an efficient and engaging way for users to discover more about books through simple image input.",
    image: BooklyAI,
    link: "https://bookly-ai.vercel.app/"
  }
];

function App() {
  return (
    <div className="Personal-Portfolio">
      <Navbar />
      <header className="Portfolio-Header" id="home">
        <img src={headshot} alt="Caleb Free" className="headshot"/>
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
          <a href="mailto:cdfree@unc.edu" aria-label="Email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/caleb-free-7aa842249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://www.instagram.com/caleb_free3.0/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://github.com/cdfree1" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        </div>
      </section>
    </div>
  );
}

export default App;