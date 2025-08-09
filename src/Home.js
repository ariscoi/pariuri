import React from 'react';
import './Home.css';
import PontulZilei from './PontulZilei';
import Altele from './Altele';
function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Bine ai venit pe cota10.ro</h1>
        <p>Locul tău zilnic pentru ponturi sigure și analize sportive!</p>
       
      </header>

    <h1>Pontul Zilei</h1>
      
      <PontulZilei />

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} PonturiSportive.ro - Toate drepturile rezervate.</p>
      </footer>
    </div>
  );
}

export default Home;
