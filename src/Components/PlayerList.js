import React, { Component } from 'react';
import '../Css/Lists.css'


class PlayerList extends Component {

  checkList = () => {
    if (!localStorage.getItem('playerList')) {
      return <h2>Your player list is empty, search players to add them to your list</h2>
    }else{
      const renderPlayerFromList = this.props.renderPlayerFromList
      const playersObject = localStorage.getItem('playerList')
      const players = JSON.parse(playersObject)
      const playersNames = Object.keys(players)
      const list = playersNames.map(name => <li className='playerName'><button onClick={() => renderPlayerFromList(name)}><br />{name}</button></li>)
      return list
    }
  }
  render() {

    return (
      <div>
        {this.checkList()}
      </div>
    );
  }
}

export default PlayerList;
