import React from 'react';
<<<<<<< HEAD
import{ Link } from 'react-router-dom'

function Menu() {
  return (
    <nav class="menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
=======

import { Link }  from "react-router-dom";

function Menu() {
  return (
    <nav
              role="navigation"
              aria-label="Main Navigation"
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
    >
      <div className='menu'>
        <ul>
          <li><Link itemProp="url" to="/">Home</Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li> 
        </ul>
      </div>
>>>>>>> 004779efc7208f2c4230ca173b887821d856de6d
    </nav>
  );
}

export default Menu;