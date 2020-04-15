import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/Nav.css'

const NavBar = () => {
  return (
    // <nav className='navigate'>

    // </nav>
    <div>
      <nav className='header'>
        World of Tanks Blitz Data Scout
    </nav>
      <nav className='navigate'>
        <ul>
          <li className='b'><Link to='/usersearch'>Player Search</Link></li>
          <Link to='/clansearch'>Clan Search</Link>
          <Link to='/playerlist'>Player List</Link>
          <Link to='/clanlist'>Clan List</Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;


