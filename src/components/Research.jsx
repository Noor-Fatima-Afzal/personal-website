import React from "react";
import emotionImg from "../images/research/emotion.jpg";
import seizureImg from "../images/research/seziure.jpeg";
import alzheimerImg from "../images/research/alzheimer.png";
import trinetImg from "../images/research/trinet.jpeg";
import sleepImg from "../images/research/sleep.png";
import neurographImg from "../images/research/neurograph.png";
import teethImg from "../images/research/teeth.jpg";
import pinnImg from "../images/research/PINN.jpeg";

export default function Research() {
  return (
    <section className="research">
      <h1>Research</h1>

      {/* Research 1 */}
      <div className="research-item">
        <div className="research-content">
          <h2>Emotion Classification via EEG Signals</h2>
          <p>
            Built a hybrid Transformer–ResNet pipeline for EEG emotion
            classification. Applied preprocessing (downsampling, band-pass
            filtering), extracted Power Spectral Density (PSD) and Differential
            Entropy (DE), and fused features. Achieved 92% accuracy on SEED-IV
            and 91% on DEAP datasets.
          </p>
          <span className="year">2025</span>
        </div>
        <div className="research-image">
          <img src={emotionImg} alt="EEG Emotion Classification Architecture" />
        </div>
      </div>

      {/* Research 2 */}
      <div className="research-item">
        <div className="research-content">
          <h2>Real-time Seizure Detection, Classification & Forecasting</h2>
          <p>
            Designed a lightweight multi-head GNN for EEG-based real-time
            seizure onset detection, type classification, and onset-time
            forecasting. Integrated detection, classification, and forecasting
            into an end-to-end multi-task framework with high accuracy and low
            latency.
          </p>
          <span className="year">2025</span>
        </div>
        <div className="research-image">
          <img src={seizureImg} alt="Seizure Detection Architecture" />
        </div>
      </div>

      {/* Research 3 */}
      <div className="research-item">
        <div className="research-content">
          <h2>Multimodal EEG Classification of Alzheimer’s and MCI</h2>
          <p>
            Proposed Transformer-based ERP analysis of olfactory-evoked EEG for
            early Alzheimer’s and MCI screening. Integrated ERP, time–frequency,
            and spatial features. Achieved 87% accuracy and macro-F1 of 0.88 on
            clinical patient data.
          </p>
          <span className="year">2025</span>
        </div>
        <div className="research-image">
          <img src={alzheimerImg} alt="Alzheimer EEG Architecture" />
        </div>
      </div>

      {/* Research 4 */}
      <div className="research-item">
        <div className="research-content">
          <h2>TriNet-MTL — Multitask Learning on Auditory EEG</h2>
          <p>
            Developed a multi-head Transformer for auditory-evoked EEG signals
            to jointly classify biometric identity, language (native vs.
            non-native), and device modality (in-ear vs. bone-conduction).
            Achieved 91%+ biometric accuracy with strong generalization.
          </p>
          <span className="year">2025</span>
        </div>
        <div className="research-image">
          <img src={trinetImg} alt="TriNet-MTL Architecture" />
        </div>
      </div>

      {/* Research 5 */}
      <div className="research-item">
        <div className="research-content">
          <h2>Sleep Stage Classification via Neuromorphic EEG Processing</h2>
          <p>
            Built a biologically inspired spiking neural network (SNN) for
            energy-efficient sleep stage decoding. Modeled EEG as temporally
            evolving spike events, leveraging brain-like temporal sparsity for
            low-power, real-time classification.
          </p>
          <span className="year">2024</span>
        </div>
        <div className="research-image">
          <img src={sleepImg} alt="Sleep Stage SNN Architecture" />
        </div>
      </div>

      {/* Research 6 */}
      <div className="research-item">
        <div className="research-content">
          <h2>NeuroGraph-TSC — Stress Decoding with Graph-based EEG Models</h2>
          <p>
            Designed a neuro-inspired spatiotemporal graph neural network for
            stress classification, regularized with neural mass model priors
            (Jansen–Rit system). Validated on SAM-40 dataset with strong
            accuracy across stress levels and ablation support.
          </p>
          <span className="year">2024</span>
        </div>
        <div className="research-image">
          <img src={neurographImg} alt="NeuroGraph-TSC Architecture" />
        </div>
      </div>

      {/* Research 7 */}
      <div className="research-item">
        <div className="research-content">
          <h2>Teeth Segmentation & 3D Volume Rendering</h2>
          <p>
            Automated dental DICOM segmentation into enamel, root, and nerve
            using U-Net with morphological post-processing. Reconstructed 3D
            volumes with marching cubes, achieving 99.8% mean segmentation
            accuracy.
          </p>
          <span className="year">2023</span>
        </div>
        <div className="research-image">
          <img src={teethImg} alt="Teeth Segmentation Architecture" />
        </div>
      </div>

      {/* Research 8 */}
      <div className="research-item">
        <div className="research-content">
          <h2>Physics-Informed Neural Network for Solar Forecasting</h2>
          <p>
            Developed a PINN framework for Global Horizontal Irradiance (GHI)
            forecasting by embedding physical priors and PDE residuals into the
            network. Achieved R² = 0.989 with improved interpretability and
            robustness.
          </p>
          <span className="year">2023</span>
        </div>
        <div className="research-image">
          <img src={pinnImg} alt="PINN Solar Forecasting Architecture" />
        </div>
      </div>
    </section>
  );
}
