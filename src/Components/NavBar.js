import React from 'react';
import {Link} from 'react-router-dom'
import '../Css/Nav.css'

const NavBar = () => {
  return (
    <div>
          <nav className='header'>
      World of Tanks Blitz Data Scout
      </nav>
    <nav className='navigate'>
      <ul>
        <li className='b'><Link to='/usersearch'>Player Search</Link></li>
        <li><Link to='dashboard'>Clan Search</Link></li>
        <li><Link to='landingpage'>Home</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;


