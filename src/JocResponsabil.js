// src/JocResponsabil.js
import React from 'react';
import './JocResponsabil.css';

const JocResponsabil = () => {
  return (
    <div className="joc-page">
      <header className="joc-header">
        <h1>Joc Responsabil</h1>
        <p>Pariază inteligent. Joacă responsabil.</p>
      </header>

      <section className="joc-section joc-info">
        <h2>De ce este important jocul responsabil?</h2>
        <p>
          Jocurile de noroc pot fi distractive, dar pot deveni periculoase dacă nu sunt practicate
          cu moderație. Este esențial să-ți cunoști limitele și să fii atent la semnele de
          dependență.
        </p>
      </section>

      <section className="joc-section joc-tips">
        <h2>Recomandări utile</h2>
        <div className="joc-cards">
          <div className="joc-card">
            <h3>Stabilește un buget</h3>
            <p>Nu paria mai mult decât îți permiți să pierzi. Fă-ți un plan clar.</p>
          </div>
          <div className="joc-card">
            <h3>Nu urmări pierderile</h3>
            <p>Nu încerca să recuperezi bani pierduți – asta poate duce la probleme mai mari.</p>
          </div>
          <div className="joc-card">
            <h3>Fă pauze</h3>
            <p>Ia-ți pauze regulate și evită jocurile în perioade stresante sau triste.</p>
          </div>
          <div className="joc-card">
            <h3>Ai grijă de sănătatea ta mintală</h3>
            <p>Nu lăsa pariurile să-ți afecteze relațiile sau echilibrul emoțional.</p>
          </div>
        </div>
      </section>

      <section className="joc-section joc-help">
        <h2>Ai nevoie de ajutor?</h2>
        <p>
          Dacă simți că jocul de noroc îți scapă de sub control, apelează la ajutor specializat.
        </p>
        <a
          href="https://jocresponsabil.ro"
          target="_blank"
          rel="noopener noreferrer"
          className="joc-btn"
        >
          Mergi la jocresponsabil.ro
        </a>
      </section>

      <footer className="joc-footer">
        <p>© {new Date().getFullYear()} Joc Responsabil • Toate drepturile rezervate</p>
      </footer>
    </div>
  );
};

export default JocResponsabil;
