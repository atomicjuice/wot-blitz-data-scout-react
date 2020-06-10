import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../Css/StatsStyle.css'

class PlayerStats extends Component {

  playerLocalStorage = (localStorage.getItem('currentPlayer'))
  playerParsed = JSON.parse(this.playerLocalStorage)

  state = {
    player: !this.props.player ? this.playerParsed : this.props.player
  }

  addToPlayerList = (name, id) => {
    if (!localStorage.getItem('playerList')) {
      localStorage.setItem('playerList', JSON.stringify({ [name]: id }))
      const player = localStorage.getItem('playerList')
      const parsedPlayer = JSON.parse(player)
      this.props.setPlayerList(parsedPlayer)
    }
    else {
      let retreivedData = localStorage.getItem('playerList')
      let playerArray = JSON.parse(retreivedData)
      playerArray[name] = id
      localStorage.setItem('playerList', JSON.stringify(playerArray))
      this.props.setPlayerList(playerArray)
      console.log(localStorage)
    }
  }

  setPlayerOneComparisonID = this.props.setPlayerOneComparisonID
  compareFromPlayerList = this.props.compareFromPlayerList


  render() {
    const player = this.state.player
    const nickname = this.state.player.nickname
    const info = player.statistics.all
    const accuracy = info.hits / info.shots * 100
    return (
      <div className='playerStats'>
        <div className='playerCard'>
          <h1>Player name: {nickname}</h1>
          <p>Battles: {info.battles}</p>
          <br></br>
          <p>Won: {info.wins}</p>
          <br></br>
          <p>Losses: {info.losses}</p>
          <br></br>
          <p>Won And Survived: {info.win_and_survived}</p>
          <br></br>
          <p>Destroyed: {info.frags}</p>
          <br></br>
          <p>Accuracy: {accuracy.toFixed(2)}%</p>
          <br></br>
          <div className='buttons'>
            <button className="CompareBySearch" onClick={() => this.setPlayerOneComparisonID(player.account_id)}> Compare With <br></br> Another User</button>
            <button className="compareFromList"onClick={() => this.compareFromPlayerList(player.account_id)}> Compare With <br></br>Player From List</button>         
            <button className="addToList" onClick={() => this.addToPlayerList(nickname, player.account_id)}>+ Add To <br></br> Player List</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlayerStats);
