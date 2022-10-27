import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Avaleht from './pages/Avaleht';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={ <Avaleht /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;