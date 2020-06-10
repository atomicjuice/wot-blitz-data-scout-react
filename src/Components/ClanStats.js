import React, { Component } from 'react';
import '../Css/StatsStyle.css'


class ClanStats extends Component {

  clanLocalStorage = (localStorage.getItem('currentClan'))
  clanParsed = JSON.parse(this.clanLocalStorage)

  state = {
    clan: !this.props.clan ? this.clanParsed : this.props.clan
  }

  addToClanList = (name, id) => {
    if (!localStorage.getItem('clanList')) {
      localStorage.setItem('clanList', JSON.stringify({ [name]: id }))
      const clan = localStorage.getItem('clanList')
      const parsedClan = JSON.parse(clan)
      this.props.setClanList(parsedClan)
    }
    else {
      let retreivedData = localStorage.getItem('clanList')
      let clanArray = JSON.parse(retreivedData)
      clanArray[name] = id
      localStorage.setItem('clanList', JSON.stringify(clanArray))
      this.props.setClanList(clanArray)
      console.log(localStorage)
    }
  }

  setClanOneComparisonID = this.props.setClanOneComparisonID
  comparisonFromClanList = this.props.comparisonFromClanList

  render() {
    const clan = this.state.clan
    return (
      <div className='clanStats'>
        <div className='clanCard'>
          <h1>Name: {clan.name}</h1>
          <br />
          <h2>Founder Name: {clan.creator_name}</h2>
          <br />
          <h2>Members Count: {clan.members_count}</h2>
          <br />
          <h2>Motto: {clan.motto} </h2>
          <br />
          <h2>Minimum tier vehicle to join: {clan.recruiting_options.vehicles_level}</h2>
          <br />
          <h2>Battles before you can join: {clan.recruiting_options.battles}</h2>
          <br />
          <h2>Minimum win/loss ratio needed to join: {clan.recruiting_options.wins_ratio} </h2>
          <br />
          <div className="buttons">
          <button className="CompareBySearch" onClick={() => this.setClanOneComparisonID(clan.clan_id)}>Compare Clans By Search</button>
          <button className="compareFromList"onClick={() => this.comparisonFromClanList(clan.clan_id)} >+Compare With Clan From List</button>
          <button className="addToList" onClick={() => this.addToClanList(clan.name, clan.clan_id)}>+ Add To Clan List </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClanStats;

