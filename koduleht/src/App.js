import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Footer from './Footer';

function App() {
  return (
    <div className="site">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="" element={ <Avaleht /> } />
          <Route path="/kontakt" element={ <Kontakt /> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;