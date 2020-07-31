import React, { Component } from 'react';
import '../Css/Lists.css';
import { withRouter } from 'react-router-dom';


class PlayerList extends Component {

  removePlayerFromList = (name) => {
    const playerList = localStorage.getItem('playerList')
    const playerListParsed = JSON.parse(playerList)
    delete playerListParsed[name]
    localStorage.setItem('playerList', JSON.stringify(playerListParsed))
    this.props.history.push('/playerList')
  }

  checkList = () => {
    if (!localStorage.getItem('playerList') || localStorage.getItem('playerList') === "{}") {
      return <h2>Your player list is empty, search players to add them to your list</h2>
    } else {
      const renderPlayerFromList = this.props.renderPlayerFromList
      const playersObject = localStorage.getItem('playerList')
      const players = JSON.parse(playersObject)
      const playersNames = Object.keys(players)
      const list = playersNames.map(name => <li className='itemContainer' ><button className='playerName' onClick={() => renderPlayerFromList(name)}>View: {name}</button>
        <button className='removeButton' onClick={() => this.removePlayerFromList(name)} >Remove Player From List</button> </li>)
      return list
    }
  }
  render() {

    return (
      <div>
        <p className='listContextMaster'>
          This list is where you can select to view any one of the players</p>
          <p className='listContext' > which you previously decided to add to your list,</p>
          <p className='listContext'> 
          or if you wish you can also remove a player from your list as well.
        </p>
        <div className='playerList'>
        {this.checkList()}
      </div>
      </div>

    );
  }
}

export default withRouter(PlayerList);
