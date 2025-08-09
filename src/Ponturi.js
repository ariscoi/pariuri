// Ponturi.js
import React from "react";
import "./Ponturi.css";

export default function Ponturi() {
  const ponturi = [
    {
      titlu: "Pontul Zilei - Premier League",
      descriere: "Manchester City vs Liverpool: Ambele echipe marchează",
      cota: "1.65",
    },
    {
      titlu: "Pont Special - La Liga",
      descriere: "Real Madrid câștigă și peste 2.5 goluri",
      cota: "1.80",
    },
    {
      titlu: "Surpriza Etapei",
      descriere: "Victorie Girona contra Barcelonei",
      cota: "3.20",
    },
  ];

  return (
    <div className="ponturi-page">
      <header className="ponturi-header">
        <h1>Ponturi Pariuri</h1>
        <p>Recomandări zilnice cu cele mai bune cote</p>
      </header>

      <section className="ponturi-list">
        {ponturi.map((pont, index) => (
          <div key={index} className="ponturi-card">
            <h3>{pont.titlu}</h3>
            <p>{pont.descriere}</p>
            <span className="cota">Cota: {pont.cota}</span>
          </div>
        ))}
      </section>

      <footer className="ponturi-footer">
        <p>© 2025 Ponturi Pariuri - Toate drepturile rezervate</p>
      </footer>
    </div>
  );
}
