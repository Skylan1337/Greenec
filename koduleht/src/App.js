import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Avaleht from './pages/Avaleht';
import Teenused from './pages/Teenused';
import Puistevill from './pages/Puistevill';
import PurVaht from './pages/PurVaht';
import TehtudTood from './pages/TehtudTood';
import Kontakt from './pages/Kontakt';
import Footer from './Footer';

function App() {
  return (
    <div className="site">
      <NavBar />
      <div className="main">
        <div className="pilt">
          <Routes>
            <Route path="" element={ <h1>Avaleht</h1> } />
            <Route path="teenused" element={ <h1>Teenused</h1> } />
            <Route path="puistevill" element={ <h1>Puistevilla paigaldamine</h1> } />
            <Route path="pur-vaht" element={ <h1>PUR vahu paigaldamine</h1> } />
            <Route path="tehtud-tood" element={ <h1>Tehtud tööd</h1> } />
            <Route path="/kontakt" element={ <h1>Kontakt</h1> } />
            <Route path="*" element={ <h1>Viga</h1> } />
          </Routes>
        </div>
        <Routes>
          <Route path="" element={ <Avaleht /> } />
          <Route path="/teenused" element={ <Teenused /> } />
          <Route path="/puistevill" element={ <Puistevill /> } />
          <Route path="/pur-vaht" element={ <PurVaht /> } />
          <Route path="/tehtud-tood" element={ <TehtudTood /> } />
          <Route path="/kontakt" element={ <Kontakt /> } />
          <Route path="*" element={ <div className="viga"><h1>Otsitud lehte ei leitud!</h1></div> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;