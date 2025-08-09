import React, { useState } from "react";
import './PontulZilei.css';

const PontulZilei = () => {
  const [sport, setSport] = useState("fotbal");
  // State to manage the selected sport, default is "fotbal"
  const ponturi = {
    fotbal: {
      titluCompetitie: "Europa: UEFA Europa League",
      echipe: [
        {
          nume: "FOTBAL CLUB FCSB",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Fcsb-logo.svg",
          alt: "FCSB",
        },
        {
          nume: "KF DRITA",
          logo: "/images/kf_drita.png",
          alt: "KF Drita",
        },
      ],
      pont: "FCSB marchează peste 1.5 goluri",
      cota: 1.55,
    },
    baschet: {
      titluCompetitie: "NBA: Los Angeles Lakers vs Miami Heat",
      echipe: [
        {
          nume: "Los Angeles Lakers",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
          alt: "Lakers",
        },
        {
          nume: "Miami Heat",
          logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
          alt: "Heat",
        },
      ],
      pont: "Lakers câștigă cu peste 5 puncte diferență",
      cota: 1.75,
    },
    hochei: {
      titluCompetitie: "NHL: Toronto Maple Leafs vs Montreal Canadiens",
      echipe: [
        {
          nume: "Toronto Maple Leafs",
          logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Toronto_Maple_Leafs_logo.svg",
          alt: "Maple Leafs",
        },
        {
          nume: "Montreal Canadiens",
          logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Montreal_Canadiens_logo.svg",
          alt: "Canadiens",
        },
      ],
      pont: "Maple Leafs câștigă la 2 sau mai multe goluri diferență",
      cota: 2.10,
    },
  };

  const dataAzi = new Date().toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const currentPont = ponturi[sport];

  return (
    <div className="pont-container">
      <div className="buttons">
        <button
          className={sport === "fotbal" ? "active" : ""}
          onClick={() => setSport("fotbal")}
        >
          Fotbal
        </button>
        <button
          className={sport === "baschet" ? "active" : ""}
          onClick={() => setSport("baschet")}
        >
          Baschet
        </button>
        <button
          className={sport === "hochei" ? "active" : ""}
          onClick={() => setSport("hochei")}
        >
          Hochei
        </button>
      </div>

      <h2 className="pont-title">{currentPont.titluCompetitie}</h2>
      <p className="pont-date">{dataAzi}</p>

      <div className="matchup">
        <div className="team">
          <img src={currentPont.echipe[0].logo} alt={currentPont.echipe[0].alt} />
          <span>{currentPont.echipe[0].nume}</span>
        </div>

        <span className="vs">vs</span>

        <div className="team">
          <img src={currentPont.echipe[1].logo} alt={currentPont.echipe[1].alt} />
          <span>{currentPont.echipe[1].nume}</span>
        </div>
      </div>

      <p className="tip-pont">{currentPont.pont}</p>
      <p className="cota">Cota: {currentPont.cota}</p>
    </div>
  );
};

export default PontulZilei;
