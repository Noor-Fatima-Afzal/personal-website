import React from "react";

export default function Publications() {
  return (
    <section className="publications">
      <h1>Publications</h1>

      <div className="publication-item">
        <h2>Quantum-Enhanced Feature Selection and Classification for Asthma Diagnosis</h2>
        <p>IEEE Transactions on Biomedical Engineering</p>
        <span className="year">2025</span>
        <p className="details">
          Proposed a hybrid quantum-classical pipeline with QAOA-based feature 
          selection and a variational quantum classifier for asthma diagnosis.
        </p>
      </div>

      <div className="publication-item">
        <h2>Multimodal EEG-Based Classification of Alzheimer’s and MCI</h2>
        <p>Brain-Apparatus Communication (Taylor &amp; Francis)</p>
        <span className="year">2025</span>
        <p className="details">
          Developed a Transformer-based model leveraging olfactory event-related 
          potentials for early detection of neurodegenerative disorders.
        </p>
      </div>

      <div className="publication-item">
        <h2>
          Multi-Branch Deep Learning Framework for Biometric Identification and 
          Cognitive State Inference
        </h2>
        <p>eNeuro (under review)</p>
        <span className="year">2025</span>
        <p className="details">
          Proposed a transformer-based multi-branch model leveraging ERP, 
          time-frequency, and spatial EEG features. Focused on olfactory response 
          signals as early biomarkers for Alzheimer’s and MCI. Achieved 87% 
          classification accuracy with a macro F1-score of 0.88. Demonstrated 
          clinical viability of non-invasive EEG-based cognitive assessment within 
          reproducible research pipelines.
        </p>
      </div>

      <div className="publication-item">
        <h2>
          NeuroGraph-TSC: A Neuro-Inspired Graph-Based Classifier for EEG Stress Detection
        </h2>
        <p>NeurIPS Conference</p>
        <span className="year">2024</span>
        <p className="details">
          Introduced graph attention and neural mass model regularization for 
          EEG-based stress and cognitive state classification.
        </p>
      </div>
    </section>
  );
}
