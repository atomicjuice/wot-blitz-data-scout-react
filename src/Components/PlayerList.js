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
    if (!localStorage.getItem('playerList')  || localStorage.getItem('playerList') === "{}") {
      return <h2>Your player list is empty, search players to add them to your list</h2>
    }else{
      const renderPlayerFromList = this.props.renderPlayerFromList
      const playersObject = localStorage.getItem('playerList')
      const players = JSON.parse(playersObject)
      const playersNames = Object.keys(players)
      const list = playersNames.map(name => <li className='playerDiv' ><button className='playerName' onClick={() =>  renderPlayerFromList(name)}>View: {name}</button> 
      <button className='removeButton' onClick={() => this.removePlayerFromList(name)} >Remove Player From List</button> </li>)
      return list
    }
  }
  render() {

    return (
      <div className='playerList'>
        {this.checkList()}
      </div>
    );
  }
}

export default withRouter(PlayerList) ;
