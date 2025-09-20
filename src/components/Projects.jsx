import React from "react";
import audioImg from "../images/audio.jpg";
import edupathImg from "../images/edupath.png";
import dentalImg from "../images/dental.jpg";
import groqvisionImg from "../images/groqvision.jpg";
import lahoreImg from "../images/lahore.jpg";
import nasaImg from "../images/nasa.jpg";
import whatsappImg from "../images/whatsapp.jpg";
import accordImg from "../images/accord.jpg";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      {/* Project 1 */}
      <div className="project-item">
        <div className="project-content">
          <h2>Audio-Analyzer: Intelligent Audio Processing Web Application</h2>
          <span className="year">August 2024</span>
          <p className="details">
            Tech Stack: Flask, React.js, JWT, MySQL, Groq API, Librosa, Pydub
            <br />
            Developed a secure full-stack app for audio diarization, transcription, 
            feature extraction, and chatbot querying via Groq LLM. Implemented 
            JWT-based authentication with a responsive React.js frontend. 
            Integrated Librosa and Pydub for signal processing.
          </p>
        </div>
        <div className="project-image">
          <img src={audioImg} alt="Audio Analyzer App" />
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-item">
        <div className="project-content">
          <h2>EduPath: AI-Powered Academic and Relocation Advisor</h2>
          <span className="year">March 2025</span>
          <p className="details">
            Tech Stack: Python, NLP, LLMs, Flask, React
            <br />
            Built an AI-powered assistant with voice/chat interface using LLMs 
            to recommend academic institutes and cities. Applied multi-criteria 
            decision algorithms considering tuition, rankings, lifestyle, and 
            personal preferences. Used Flask for API logic and React for UI design.
          </p>
        </div>
        <div className="project-image">
          <img src={edupathImg} alt="EduPath App" />
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-item">
        <div className="project-content">
          <h2>AI-powered Dental DICOM Annotation System</h2>
          <span className="year">June 2025</span>
          <p className="details">
            Tech Stack: Python, PyTorch, U-Net, pydicom, OpenCV, 3D Slicer, Dragonfly
            <br />
            Developed a U-Net-based AI model to segment dental CT scans, identifying 
            nerves, roots, and enamel structures. Preprocessed 3D volumetric data 
            using pydicom and OpenCV. Visualized segmentation results using 3D Slicer 
            and Dragonfly tools.
          </p>
        </div>
        <div className="project-image">
          <img src={dentalImg} alt="Dental DICOM App" />
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-item">
        <div className="project-content">
          <h2>GroqVision: Vision-LLM Powered OCR and Document Analysis Tool</h2>
          <span className="year">July 2025</span>
          <p className="details">
            Tech Stack: Python, Streamlit, Groq Chat API, Pillow, Custom CSS
            <br />
            Built a Streamlit web app enabling OCR and document understanding from 
            uploaded images. Integrated vision-enabled Groq LLM to answer questions 
            and infer document structure. Auto-structured OCR output into Markdown 
            with headings, lists, and code blocks. Designed a clean UI with progress 
            bars, alerts, previews, and downloadable output.
          </p>
        </div>
        <div className="project-image">
          <img src={groqvisionImg} alt="GroqVision App" />
        </div>
      </div>

      {/* Project 5 */}
      <div className="project-item">
        <div className="project-content">
          <h2>LahoreLegacy: AI-Powered Historical Guide</h2>
          <span className="year">May 2025</span>
          <p className="details">
            Tech Stack: Python, Streamlit, HuggingFace Transformers, OpenAI, FAISS, LangChain, PyMuPDF
            <br />
            Designed and developed an AI-powered web app to explore Lahore’s history 
            using LLMs and semantic search. Implemented FAISS for retrieval from 
            Wikipedia, websites, and PDFs. Added PDF upload functionality to search 
            and summarize custom documents with LangChain and PyMuPDF.
          </p>
        </div>
        <div className="project-image">
          <img src={lahoreImg} alt="LahoreLegacy App" />
        </div>
      </div>

      {/* Project 6 */}
      <div className="project-item">
        <div className="project-content">
          <h2>NASA APOD App</h2>
          <span className="year">February 2025</span>
          <p className="details">
            Tech Stack: React, NASA API, CSS / Styled Components
            <br />
            Created a sleek React app that fetches NASA’s Astronomy Picture of the Day 
            with image and description. Focused on delivering a clean UI/UX with 
            styled components.
          </p>
        </div>
        <div className="project-image">
          <img src={nasaImg} alt="NASA APOD App" />
        </div>
      </div>

      {/* Project 7 */}
      <div className="project-item">
        <div className="project-content">
          <h2>WhatsApp Chat Analysis</h2>
          <span className="year">June 2024</span>
          <p className="details">
            Tech Stack: Python, Streamlit, Pandas, Matplotlib, Seaborn, WordCloud, Plotly
            <br />
            Developed an interactive Streamlit app to analyze WhatsApp chat data with 
            visual statistics and summaries. Visualized message frequency, active hours, 
            word clouds, and emoji usage. Enabled users to upload their own chat files 
            and explore personalized insights.
          </p>
        </div>
        <div className="project-image">
          <img src={whatsappImg} alt="WhatsApp Chat Analysis App" />
        </div>
      </div>

      {/* Project 8 */}
      <div className="project-item">
        <div className="project-content">
          <h2>Accord – Ask about Islam</h2>
          <span className="year">April 2024</span>
          <p className="details">
            Tech Stack: Python, Django, React, Firebase, SQLite, API Integration
            <br />
            Built a full-stack spiritual app enabling signup, private scholar messaging, 
            Namaz reminders, and real-time prayer timings. Integrated Quranic recitation 
            APIs, calendar for key religious dates, and location-based spiritual tools. 
            Fostered community engagement through topic-based channels and a user-friendly 
            interface promoting daily spiritual habits.
          </p>
        </div>
        <div className="project-image">
          <img src={accordImg} alt="Accord App" />
        </div>
      </div>
    </section>
  );
}
