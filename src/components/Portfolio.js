// Portfolio.js

import React from "react";
import email from "./assets/email.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import education from "./assets/education.png";
import experience from "./assets/experience.png";
import profilePic from "./assets/profile-pic.jpeg";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import arrow from "./assets/arrow.png";
import aboutPic from "./assets/aboutpic.png";
import checkmark from "./assets/checkmark.png";

import "./Portfolio.css"; // Import your CSS file
import "./mediaqueries.css"; // Import your CSS file

function Portfolio() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Rajpoot</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Man Mohan</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img src={profilePic} alt="ManMohan profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Man Mohan Singh</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hP9QVUwF6MkJNjxVHc-RjljDQhlBg6SA/view?usp=sharing"
                )
              }
            >
              Download CV
            </button>

            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => (window.location.href = "https://www.linkedin.com/in/rajputakash18/")}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={() => (window.location.href = "https://github.com/ManMohanSingh031")}
            />
          </div>
        </div>
        {/* ... (rest of the code) */}
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={aboutPic}
              alt="ManMohan profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={experience} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  11+ month <br />
                  Subject Matter Expert <br /> at Chegg India Pvt. Ltd.
                </p>
              </div>
              <div className="details-container">
                <img src={education} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>
                   Bachelors of Technology 
                  <br />
                  Computer Science and Engineering
                  <br />
                  2020-2024
                  <br />
                  at IIIT Nagpur 
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
              I am a 4th-year Computer Science and Engineering student at IIIT Nagpur, specializing in Frontend Development. 
              Experienced in various projects, I am a quick learner, team player, and adept at tackling challenges. 
              Motivated by smart work, I excel both independently and collaboratively. 
              A creative problem solver, I thrive on exploring new technologies and embracing challenges.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#experience")}
        />
        {/* ... (rest of the code) */}
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <ul>
                  <div>
                    <h3>HIML/CSS<br/>JavaScript<br/>React<br/>NPM<br/>Bootstrap<br/>TypeScript </h3>
                    <p>Experienced</p>
                  </div>
                  </ul> 
                </article>
                {/* ... (other articles) */}
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src={checkmark} alt="Experience icon" className="icon" />
                  <div>
                    <h3>C++ <br/>Java<br/> Node<br/> MongoDB<br/> PHP<br/> SQL</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                {/* ... (other articles) */}
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#projects")}
        />
        {/* ... (rest of the code) */}
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={project1} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://github.com/ManMohanSingh031/reditclonenextjs")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://reditclone.knowvibe.tech/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={project2} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://github.com/ManMohanSingh031/transcriber")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://transcriber.knowvibe.tech/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={project3} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://github.com/ManMohanSingh031/LogBook-main/tree/main/LogBook-main")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://github.com/ManMohanSingh031/LogBook-main/blob/main/LogBook-main/README%20Images/loginpage.png")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#contact")}
        />
        {/* ... (rest of the code) */}
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={email}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:">manmohansingh8422@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/rajputakash18/">LinkedIn</a>
            </p>
          </div>
        </div>
        {/* ... (rest of the code) */}
      </section>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 ManMohanSingh. All Rights Reserved.</p>
        {/* ... (rest of the code) */}
      </footer>
      <script src="script.js"></script>
    </div>
  );
}

export default Portfolio;
