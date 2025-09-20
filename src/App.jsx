import React, { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg"; 
import About from "./components/About"; 
import Academics from "./components/Academics"; 
import Experience from "./components/Experience";
import Research from "./components/Research";
import Publications from "./components/Publications"; 
import Projects from "./components/Projects";
import Talks from "./components/Talks";
import Honors from "./components/Honors";
import Footer from "./components/Footer"; 


export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="portfolio">
      {/* Top Profile Section */}
      <header className="header">
        <div className="profile-section">
          <div className="profile-pic">
            <img src={profileImage} alt="profile" />
          </div>
          <div className="social-icons">
            <span>Connect with me</span>
            <div className="icons">
  <a href="https://leetcode.com/u/noorfatimaafzalbutt/" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" alt="LeetCode" />
  </a>
  {/* <a href="#" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hackathon.svg" alt="Hackathon" />
  </a> */}
  <a href="https://huggingface.co/Noor-Fatima-01" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg" alt="Hugging Face" />
  </a>

  <a href="https://x.com/NoorFatimaAfzal?t=TqARvJq1l1U_M9A6ZBRD0g&s=09" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" />
  </a>
  <a href="https://github.com/Noor-Fatima-Afzal" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/noor-fatima-afzal" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
  </a>
    {/* <a href="#" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kaggle.svg" alt="Kaggle" />
  </a> */}
  <a href="https://www.hackerrank.com/profile/noorfatimaafzal1" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hackerrank.svg" alt="HackerRank" />
  </a>
  <a href="https://medium.com/@noorfatimaafzalbutt" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/medium.svg" alt="Medium" />
  </a>
</div>

          </div>
        </div>
      </header>

      {/* Navigation Bar */}
    <nav className="navbar">
      <a 
        className={activeSection === "about" ? "active" : ""} 
        onClick={() => setActiveSection("about")}
      >
        About
      </a>
      <a 
        className={activeSection === "academics" ? "active" : ""} 
        onClick={() => setActiveSection("academics")}
      >
        Academics
      </a>
      <a 
        className={activeSection === "experience" ? "active" : ""} 
        onClick={() => setActiveSection("experience")}
      >
        Experience
      </a>
      <a 
        className={activeSection === "research" ? "active" : ""} 
        onClick={() => setActiveSection("research")}
      >
        Research
      </a>
      <a 
        className={activeSection === "publications" ? "active" : ""} 
        onClick={() => setActiveSection("publications")}
      >
        Publications
      </a>
      <a 
        className={activeSection === "projects" ? "active" : ""} 
        onClick={() => setActiveSection("projects")}
      >
        Projects
      </a>
      <a 
        className={activeSection === "talks" ? "active" : ""} 
        onClick={() => setActiveSection("talks")}
      >
        Talks
      </a>
      <a 
        className={activeSection === "honors" ? "active" : ""} 
        onClick={() => setActiveSection("honors")}
      >
        Awards
      </a>
    </nav>


      {/* Conditional Rendering */}
      {activeSection === "about" && <About />}
      {activeSection === "academics" && <Academics />}
      {activeSection === "experience" && <Experience />}
      {activeSection === "research" && <Research />}
      {activeSection === "publications" && <Publications />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "talks" && <Talks />}
      {activeSection === "honors" && <Honors />} 
      <Footer />

    </div>
  );
}
