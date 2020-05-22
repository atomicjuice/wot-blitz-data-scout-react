import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/Nav.css'

const NavBar = () => {
  return (
    // <nav className='navigate'>

    // </nav>
    <div>
      {/* <nav className='header'>
        World of Tanks Blitz Data Scout
    </nav> */}
      <nav className='navigate'>
        <ul>
          <li className='b'><Link to='/usersearch'>Player Search</Link></li>
          <li><Link to='/clansearch'>Clan Search</Link></li>
          <li><Link to='/playerlist'>Player List</Link></li>
          <li><Link to='/clanlist'>Clan List</Link></li>
          <li className='appName'>World of Tanks Blitz Data Scout</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;


