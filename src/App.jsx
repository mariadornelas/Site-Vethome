import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;