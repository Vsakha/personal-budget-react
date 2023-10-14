import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';

import { BrowserRouter as Router,
  Route,
  Routes
  } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className='mainContainer'>
      <Routes>
          <Route path="/About" element={<AboutPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
