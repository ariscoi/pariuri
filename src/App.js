import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Ponturi from './Ponturi';
import Bilet from './Bilet';
import logo from './logo.png';
import JocResponsabil from './JocResponsabil';
function App() {
  return (
    <Router>
      <div className="App">
      
      <div className="menu">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        <ul>
          <li><Link to="/ponturi">Ponturi</Link></li>
          <li><Link to="/Bilet">Biletul Zilei</Link></li>
          <li><Link to="/JocResponsabil">Joc Responsabil</Link></li>
        </ul>
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ponturi" element={<Ponturi />} />
          <Route path="/Bilet" element={<Bilet />} />
          <Route path="/JocResponsabil" element={<JocResponsabil />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
