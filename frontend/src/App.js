import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './navBar/NavBar.js';
import Portfolio from './sections/Portfolio.js';
import FoodAppShowcase from './sections/FoodAppShowcase.js';
import Footer from './sections/Footer.js';
import AboutMe from './aboout-me/AboutMe.js';
import ProjectShowcase from './projects/ProjectShowcase.js';
import ContactPopup from './contact/ContactPopup.js';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShow = () => setShowPopup(true);  
  const handleClose = () => setShowPopup(false)

  return (
    <BrowserRouter>
      <div style={{ position: showPopup === true? 'relative' : '' }}>
        <NavBar handleShow={handleShow} />
        
          
        {showPopup && (
        <ContactPopup handleClose={handleClose} />
      )}
          
       
        <div>
          <Routes>
            <Route path="/" element={<Portfolio  handleShow={handleShow} />} />
            <Route path="/food/:id" element={<FoodAppShowcase />} />
            <Route path="/about" element={<AboutMe  handleShow={handleShow}/>} />
            <Route path="/project/list" element={<ProjectShowcase />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
