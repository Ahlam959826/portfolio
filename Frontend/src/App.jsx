
// src/App.jsx
import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import MySkills from './Components/MySkills';
import MyServices from './Components/MyServices';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';



const App = () => {
  return (
    <div>
      
    <Navbar />
    <Home />
    <AboutMe />
    <MySkills />
    <MyServices />
    <ContactMe />
    <Footer />

    </div>
  );
};

export default App;
