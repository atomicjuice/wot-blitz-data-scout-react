import React, { Component } from 'react';
import '../Css/ClanComparison.css'

class ClanComparison extends Component {

  state = {
    clanOne: this.props.currentClanInfo,
    clanTwo: this.props.clanTocompareinfo
  }


  render() {
    const clanOne = this.state.clanOne
    const clanTwo = this.state.clanTwo
    return (
      <div>
        {console.log(clanTwo)}
        <div className='clanOne'>
          <h1>Name: {clanOne.name}</h1>
          <br />
          <h2>Founder Name: {clanOne.creator_name}</h2>
          <br />
          <h2>Members Count: {clanOne.members_count}</h2>
          <br />
          <h2>Motto: {clanOne.motto} </h2>
          <br />
          <h2>Minimum tier vehicle to join: {clanOne.recruiting_options.vehicles_level}</h2>
          <br />
          <h2>Battles before you can join: {clanOne.recruiting_options.battles}</h2>
          <br />
          <h2>Minimum win/loss ratio needed to join: {clanOne.recruiting_options.wins_ratio} </h2>
          <br />
        </div>
        <br/>
        <br/>
        <div className='clanTwo'>
          <h1>Name: {clanTwo.name}</h1>
          <br />
          <h2>Founder Name: {clanTwo.creator_name}</h2>
          <br />
          <h2>Members Count: {clanTwo.members_count}</h2>
          <br />
          <h2>Motto: {clanTwo.motto} </h2>
          <br />
          <h2>Minimum tier vehicle to join: {clanTwo.recruiting_options.vehicles_level}</h2>
          <br />
          <h2>Battles before you can join: {clanTwo.recruiting_options.battles}</h2>
          <br />
          <h2>Minimum win/loss ratio needed to join: {clanTwo.recruiting_options.wins_ratio} </h2>
          <br />
        </div>
      </div>
    )
  }
}

export default ClanComparison;
