import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h1>Experience</h1>

      <div className="experience-item">
        <h2>Research Intern</h2>
        <span className="year">May 2025 – Present</span>
        <p>National Center for Quantum Computing (NCQC), Lahore, Pakistan</p>
        <p className="details">
          Exploring quantum algorithms for healthcare diagnostics in a 5-member interdisciplinary team. 
          Developed a QAOA-based feature selection approach with a Variational Quantum Classifier (VQC) 
          for asthma diagnosis on 2000+ patient samples. Achieved 98.4% accuracy, showing a +3.7% 
          improvement over classical baselines.
        </p>
      </div>

      <div className="experience-item">
        <h2>Research Assistant</h2>
        <span className="year">June 2024 – Present</span>
        <p>Al-Khawarizmi Institute of Computer Science (KICS), Lahore, Pakistan</p>
        <p className="details">
          Assessed EEG-based emotion recognition pipeline on 3 datasets (150+ subjects). 
          Developed ERP-based Alzheimer’s/MCI classifier using 80+ patient EEGs for early screening studies. 
          Enhanced stress-decoding by integrating computational neuroscience models.
        </p>
      </div>

      <div className="experience-item">
        <h2>Machine Learning Intern</h2>
        <span className="year">Mar 2024 – Jun 2024</span>
        <p>Datalabb, Lahore, Pakistan</p>
        <p className="details">
          Co-developed U-Net segmentation framework for 10k+ medical images; delivered 90% mean Dice score 
          and reduced manual annotation by 80%. Fine-tuned domain-adapted LLMs for clinical text, 
          increasing reliability by 22% and deployed for research staff.
        </p>
      </div>

      <div className="experience-item">
        <h2>Machine Learning Fellow</h2>
        <span className="year">Jun 2024 – Sep 2024</span>
        <p>Bytewise Limited, Lahore</p>
        <p className="details">
          Selected among top 9% of 2,300+ applicants; completed 8+ projects in ML modeling and data analysis. 
          Automated preprocessing workflows, cutting runtime from 2 days to under 6 hours, 
          accelerating project delivery.
        </p>
      </div>
    </section>
  );
}
