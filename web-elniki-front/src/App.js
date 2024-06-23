import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Developedoffer from './pages/Developedoffer';
import Food from './pages/Food';
import About from './pages/About';
import Contact from './pages/Contact';
import Skipass from './pages/skipass';
import SkiSlopes from './pages/SkiSlopes';
import Rental from './pages/rental';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderPage } from "./orderBuyingComponents/OrderPage";
import { BuyingPage } from "./orderBuyingComponents/BuyingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentForm from './components/payment/PaymentForm';
import RegPage from "./regLogComponents/regComponents/RegPage";
import LogPage from './regLogComponents/logComponents/LogPage';
import SkiPassPage from './components/informationAboutSkipasses/informationAboutSkipasses';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/buy' element={<BuyingPage />} />
          <Route path="/services" element={<Developedoffer />} />
          <Route path='/login' element={<LogPage />} />
          <Route path='/reg' element={<RegPage />} />
          <Route path="/abouttheresort" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/payment' element={<PaymentForm />} />
          <Route path="/food" element={<Food />} />
          <Route path="/skipass" element={<Skipass />} />
          <Route path="/SkiSlopes" element={<SkiSlopes />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/myskipass" element={<SkiPassPage userId={1} />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}
export default App;