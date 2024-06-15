import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Developedoffer from './pages/Developedoffer';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Developedoffer />} />
          <Route path="/accommodation" element={<div>Accommodation Page</div>} />
          <Route path="/abouttheresort" element={<About/>} />
          <Route path="/account" element={<div>Account Page</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
