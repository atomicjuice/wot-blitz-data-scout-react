import React, { Component } from 'react';
import '../Css/ClanComparison.css'

class ClanComparison extends Component {

  ClanOneInfo = () => {
    const clanOneLocalStorage = localStorage.getItem('currentClan')
    const clanOneParsed = JSON.parse(clanOneLocalStorage)
    return (clanOneParsed)
  }

  ClanTwoInfo = () => {
    const clanTwoLocalStorage = localStorage.getItem('comparisonClan')
    const clanTwoParsed = JSON.parse(clanTwoLocalStorage)
    return (clanTwoParsed)
  }

  state = {
    clanOne: this.ClanOneInfo(),
    clanTwo: this.ClanTwoInfo()
  }

  render() {
    const clanOne = this.state.clanOne
    const clanTwo = this.state.clanTwo
    return (
      <div >
        <p id='playerComparisonContextMaster'>Here are the clans compared side by side. for quick reference,</p>
        <p className='playerComparisonContext'> each clan's stats have been colour coded to denote from a
        glance which clan has a higher or better stat,</p>
        <p className='playerComparisonContext'>
          <span style={{ color: "green" }} >Green is higher/better </span>
         and <span style={{ color: "red" }}>red is lower/worse</span>
        </p>
        <div className='clanComparison'>
        {console.log(clanTwo)}
        <div className='clanOneCard'>
          <h1 className='clanOneTitle'>{clanOne.name}</h1>
          <h4 className='motto'>Motto: {clanOne.motto}</h4>
          <h2>Founder Name: {clanOne.creator_name}</h2>
          <p className={clanOne.members_count > clanTwo.members_count ? 'green' : 'red'}>Members Count: {clanOne.members_count}</p>
          <p className={clanOne.recruiting_options.vehicles_level > clanTwo.recruiting_options.vehicles_level ? 'green' : 'red'}>Minimum tier vehicle to join: {clanOne.recruiting_options.vehicles_level}</p>
          <p className={clanOne.recruiting_options.battles > clanTwo.recruiting_options.battles ? 'green' : 'red'}>Battles before you can join: {clanOne.recruiting_options.battles}</p>
          <p className={clanOne.recruiting_options.wins_ratio >= clanTwo.recruiting_options.wins_ratio ? 'green' : 'red'}>Minimum win/loss ratio needed to join: {clanOne.recruiting_options.wins_ratio}</p>
        </div>
        <br />
        <br />
        <div className='clanTwoCard'>
          <h1 className='clanTwoTitle'>{clanTwo.name}</h1>
          <h4 className='motto'>Motto: {clanTwo.motto}</h4>
          <h2>Founder Name: {clanTwo.creator_name}</h2>
          <p className={clanOne.members_count < clanTwo.members_count ? 'green' : 'red'}>Members Count: {clanTwo.members_count}</p>
          <p className={clanOne.recruiting_options.vehicles_level < clanTwo.recruiting_options.vehicles_level ? 'green' : 'red'}>Minimum tier vehicle to join: {clanTwo.recruiting_options.vehicles_level}</p>
          <p className={clanOne.recruiting_options.battles < clanTwo.recruiting_options.battles ? 'green' : 'red'}>Battles before you can join: {clanTwo.recruiting_options.battles}</p>
          <p className={clanOne.recruiting_options.wins_ratio <= clanTwo.recruiting_options.wins_ratio ? 'green' : 'red'}>Minimum win/loss ratio needed to join: {clanTwo.recruiting_options.wins_ratio}</p>
        </div>
      </div>
      </div>

    )
  }
}

export default ClanComparison;
