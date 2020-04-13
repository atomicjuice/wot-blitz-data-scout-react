import React from 'react';
import {Link} from 'react-router-dom'
import '../Css/Nav.css'

const NavBar = () => {
  return (
    <nav className='navigate'>
        <Link to='/usersearch'>Player Search</Link>
        <Link to='/clansearch'>Clan Search</Link>
        <Link to='/playerlist'>Player List</Link>
        <Link to='/clanlist'>Clan List</Link>
    </nav>
  );
}

export default NavBar;


