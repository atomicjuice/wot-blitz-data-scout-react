import React from 'react';
import {Link} from 'react-router-dom'
import '../Css/Nav.css'

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><Link to='/usersearch'>Player Search</Link></li>
        <li><Link to='dashboard'>Clan Search</Link></li>
        <li><Link to='landingpage'>Home</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;


