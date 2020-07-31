import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/Nav.css'

const NavBar = () => {
  return (
    // <nav className='navigate'>

    // </nav>
    <div>
      <nav className='navigate'>
        <ul>
          <li className='appName'><Link to='/' className='appName'>World of Tanks Blitz Data Scout</Link></li>
          <li className='linkStyle'><Link to='/usersearch'>Player Search</Link></li>
          <li className='linkStyle'><Link to='/clansearch'>Clan Search</Link></li>
          <li className='linkStyle'><Link to='/playerlist'>Player List</Link></li>
          <li className='linkStyle'><Link to='/clanlist'>Clan List</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;


