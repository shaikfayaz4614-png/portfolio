import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';

const projects = [
  {
    number: '01',
    type: 'SYSTEMS · C · LINUX',
    title: 'OS Message Bus',
    description: 'An academic message-bus implementation with broker, publisher and subscriber components, demonstrating IPC using shared memory, pipes, FIFOs, signals and synchronization.',
    tags: ['C', 'Linux', 'IPC', 'Shared Memory'],
    link: 'https://github.com/shaikfayaz4614-png'
  },
  {
    number: '02',
    type: 'IOT · EMBEDDED SYSTEMS',
    title: 'Multi-Node RFID Attendance System',
    description: 'An IoT attendance-system project concept using STM32 reader nodes and RC522 RFID modules, with CAN communication to a central node and SD-card attendance logging.',
    tags: ['STM32', 'C', 'RFID', 'CAN'],
    link: 'https://github.com/shaikfayaz4614-png'
  },
  {
    number: '03',
    type: 'MACHINE LEARNING · BACKEND',
    title: 'Placement Prediction System',
    description: 'An academic machine-learning project exploring student placement prediction, with a Python backend concept for serving predictions through FastAPI.',
    tags: ['Python', 'Machine Learning', 'FastAPI'],
    link: 'https://github.com/shaikfayaz4614-png'
  }
];

function App() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home">SF<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a>
          <a className="nav-cta" href="mailto:shaikfayaz4614@gmail.com">Contact ↗</a>
        </div>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <p className="intro">HELLO, I'M</p>
          <h1>Shaik <span>Fayaz.</span></h1>
          <h2>Computer Science Student <i>&</i> Developer</h2>
          <p className="lead">I build practical projects across software engineering, machine learning and the Internet of Things.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <span>↘</span></a>
            <a className="button secondary" href="mailto:shaikfayaz4614@gmail.com">Get in touch</a>
          </div>
          <div className="hero-meta"><span>GUNTUR, INDIA</span><span>·</span><span>B.TECH CSE · 2029</span></div>
        </div>
        <div className="hero-card">
          <div className="card-top"><span>DEVELOPER PROFILE</span><span>2026 — 2029</span></div>
          <div className="monogram">S<span>F</span></div>
          <div className="card-name">Shaik Fayaz</div>
          <div className="card-role">Software · ML · IoT</div>
          <div className="card-line"></div>
          <div className="stats">
            <div><strong>8.7</strong><small>CGPA / 10</small></div>
            <div><strong>03</strong><small>ACADEMIC PROJECTS</small></div>
          </div>
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="section wrap" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <h2>Curious by nature.<br/><span>Driven to build.</span></h2>
          <div className="about-text">
            <p>I’m a second-year B.Tech Computer Science and Engineering student at KL University, with a current CGPA of 8.7.</p>
            <p>I enjoy solving programming problems and exploring how software, intelligent systems and connected devices work together. I’m looking for an opportunity to learn from a development team and contribute to real-world engineering projects.</p>
            <div className="about-facts"><span>KL UNIVERSITY</span><span>EXPECTED GRADUATION · 2029</span></div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="wrap">
          <div className="section-label">02 / TOOLKIT</div>
          <h2 className="section-title">Skills I’m <span>building with.</span></h2>
          <div className="skills-grid">
            <article className="skill-card"><div>01</div><h3>Programming</h3><p>Java · Python · C</p></article>
            <article className="skill-card"><div>02</div><h3>Software Development</h3><p>React · JavaScript · FastAPI · REST APIs</p></article>
            <article className="skill-card"><div>03</div><h3>Machine Learning</h3><p>Supervised learning · Classification · Prediction concepts</p></article>
            <article className="skill-card"><div>04</div><h3>IoT & Embedded</h3><p>STM32 · RFID · CAN communication</p></article>
            <article className="skill-card"><div>05</div><h3>CS Fundamentals</h3><p>DSA · OOP · Operating Systems · DBMS</p></article>
            <article className="skill-card"><div>06</div><h3>Tools</h3><p>Git · GitHub · Linux · STM32CubeIDE</p></article>
          </div>
          <p className="fineprint">Skills listed reflect technologies and topics I have studied or used in academic work.</p>
        </div>
      </section>

      <section className="section wrap" id="projects">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="projects-heading"><h2 className="section-title">Projects with <span>purpose.</span></h2><p>Academic work and hands-on exploration.</p></div>
        <div className="project-list">
          {projects.map((project) => <article className="project" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-main"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>↗</a>
          </article>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-inner">
          <div className="section-label">04 / LET’S CONNECT</div>
          <h2>Have an opportunity?<br/><span>Let’s build something.</span></h2>
          <a className="button primary" href="mailto:shaikfayaz4614@gmail.com">Email me ↗</a>
          <div className="contact-links"><a href="https://github.com/shaikfayaz4614-png" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:shaikfayaz4614@gmail.com">Email ↗</a></div>
        </div>
      </section>
      <footer className="wrap footer"><span>© 2026 SHAIK FAYAZ</span><span>DESIGNED & BUILT WITH REACT</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
