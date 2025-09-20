import React from "react";

export default function Talks() {
  return (
    <section className="talks">
      <h1>Talks</h1>

      <div className="talk-item">
        <h2>Quantum Machine Learning for Healthcare</h2>
        <p className="details">
          Invited talk on applying variational quantum classifiers for asthma 
          diagnosis at IEEE Quantum Computing Workshop.
        </p>
        <span className="year">2025</span>
      </div>

      <div className="talk-item">
        <h2>Multimodal EEG for Alzheimer’s Detection</h2>
        <p className="details">
          Speaker at Brain-Apparatus Communication Symposium, presenting 
          Transformer-based models for olfactory EEG signals.
        </p>
        <span className="year">2025</span>
      </div>

      <div className="talk-item">
        <h2>Neuro-Inspired Graph Models for Stress Classification</h2>
        <p className="details">
          Presented at NeurIPS Workshop on Neuroscience and AI Integration, 
          showcasing NeuroGraph-TSC architecture.
        </p>
        <span className="year">2024</span>
      </div>

      <div className="talk-item">
        <h2>Spiking Neural Networks for EEG Analysis</h2>
        <p className="details">
          Guest lecture on biologically inspired SNN models for sleep stage 
          classification at Dhaka University.
        </p>
        <span className="year">2024</span>
      </div>
    </section>
  );
}
