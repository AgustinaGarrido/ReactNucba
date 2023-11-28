import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationProvider } from './components/context/NavigationContext.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProductsList from './components/ProductsList/ProductsList.jsx';
import Contact from './components/Contact/Contact.jsx'; 
import AboutUs from './components/AboutUs/AboutUs.jsx'; 
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <NavigationProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </NavigationProvider>
    </Router>
  );
}

export default App;
