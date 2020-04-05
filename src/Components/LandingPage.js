import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Css/HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to='/signin'><button className='signinbutton'>signin</button> </Link>
        {/* <Link to='quickscout'></Link> */}
      </div>
    );
  }
}

export default HomePage;
