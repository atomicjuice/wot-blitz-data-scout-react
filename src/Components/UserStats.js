import React, { Component } from 'react';
import '../Css/UserStatsStyle.css'

class UserStats extends Component {

  playerLocalStorage = (localStorage.getItem('currentPlayer'))
  playerParsed = JSON.parse(this.playerLocalStorage)

  state = {
    // player: this.props.player
    player: this.playerParsed
  }

  addToPlayerList = (name, id) => {
    if (!localStorage.getItem('playerList')) {
      localStorage.setItem('playerList', JSON.stringify({[name]: id}))
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


  render() {
    const player = this.state.player
    const nickname = this.state.player.nickname
    const info = player.statistics.all
    const accuracy = info.hits / info.shots * 100
    return (
      <div>
        {console.log(player.account_id)}
        <h1>Player name: {nickname}</h1>
        <br></br>
        <h2>Battles: {info.battles}</h2>
        <br></br>
        <h2>Won: {info.wins}</h2>
        <br></br>
        <h2>Losses: {info.losses}</h2>
        <br></br>
        <h2>Won And Survived: {info.win_and_survived}</h2>
        <br></br>
        <h2>Destroyed: {info.frags}</h2>
        <br></br>
        <h2>Accuracy: {accuracy.toFixed(2)}%</h2>
        <br></br>
        <button onClick={() => this.addToPlayerList(nickname, player.account_id)}>+ Add To Player List</button>
      </div>
    );
  }
}

export default UserStats;
