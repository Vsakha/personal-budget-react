import React from 'react';
<<<<<<< HEAD
import './App.css';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';

import { BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className='mainContainer'>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
=======
import './App.scss';

import 
  {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import Aboutpage from './AboutPage/AboutPage';
import Loginpage from './LoginPage/LoginPage';
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';

function App() {
  return (
    <Router className="App">
      <Menu/>
      <Hero/>
      <div className="main Container">
        
        <Routes>
          <Route path="/About" element={<Aboutpage/>}/>
          <Route path="/Login" element={<Loginpage/>}/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
>>>>>>> 004779efc7208f2c4230ca173b887821d856de6d
      </div>
      <Footer/>
    </Router>
  );
}

<<<<<<< HEAD
=======

>>>>>>> 004779efc7208f2c4230ca173b887821d856de6d
export default App;
