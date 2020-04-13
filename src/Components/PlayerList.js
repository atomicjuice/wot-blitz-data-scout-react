import React, { Component } from 'react';
import '../Css/Lists.css'


class PlayerList extends Component {
  render() {
    const renderPlayerFromList = this.props.renderPlayerFromList
    const playersObject = localStorage.getItem('playerList')
    const players = JSON.parse(playersObject)
    const playersNames = Object.keys(players)
    const list = playersNames.map(name => <li className='playerName'><button onClick={() => renderPlayerFromList(name)}><br />{name}</button></li> )
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PlayerList;
