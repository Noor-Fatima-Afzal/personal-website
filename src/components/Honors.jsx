import React from "react";

export default function Honors() {
  return (
    <section className="honors">
      <h1>Honors & Awards</h1>

      <div className="honor-item">
        <h2>Excellence in Neuroscience Research Award</h2>
        <p className="details">
          Recognized for outstanding contributions to EEG-based neuro-inspired
          machine learning research at KICS-UET.
        </p>
        <span className="year">2025</span>
      </div>

      <div className="honor-item">
        <h2>Chief Minister Punjab’s Honhaar Scholarship</h2>
        <p className="details">
          Awarded merit-based scholarship for being in the top 3 of the session
          at UET Lahore.
        </p>
        <span className="year">2024</span>
      </div>

      <div className="honor-item">
        <h2>International Hackathon Recognition</h2>
        <p className="details">
          Achieved finalist position at global AI hackathons hosted by
          Lablab.ai, competing among 300+ teams.
        </p>
        <span className="year">2024</span>
      </div>

      <div className="honor-item">
        <h2>Invited Speaker – ACM UET Lahore</h2>
        <p className="details">
          Delivered a talk on EEG-based neural decoding and AI applications in
          neuroscience.
        </p>
        <span className="year">2023</span>
      </div>
    </section>
  );
}
