import React, { Component } from 'react';
import '../Css/PlayerComparison.css'

class PlayerComparison extends Component {

  playerOneInfo = () => {
    const playerOneLocalStorage = localStorage.getItem('currentPlayer')
    const playerOneParsed = JSON.parse(playerOneLocalStorage)
    return(playerOneParsed)
  }

  playerTwoInfo = () => {
    const playerTwoLocalStorage = localStorage.getItem('comparisonPlayer')
    const playerTwoParsed = JSON.parse(playerTwoLocalStorage)
    return(playerTwoParsed)
  }




  state = {
    playerOne: this.playerOneInfo(),
    playerTwo: this.playerTwoInfo()
  }

  render() {
    const playerOneNickname = this.state.playerOne.nickname
    const playerOne = this.state.playerOne.statistics.all
    const playerTwoNickname = this.state.playerTwo.nickname
    const playerTwo = this.state.playerTwo.statistics.all
    const playerOneAccuracy = playerOne.hits / playerOne.shots * 100
    const playerTwoAccuracy = playerTwo.hits / playerTwo.shots * 100
    return (
      <div className='split'>


        <div className='player1' >
          <h1 style={{ color: 'blue' }}>{playerOneNickname}</h1>
          <br />
          <p className={playerOne.battles > playerTwo.battles ? 'green' : 'red'}>battles:{playerOne.battles}</p>
          <p className={playerOne.wins > playerTwo.wins ? 'green' : 'red'}>wins:{playerOne.wins}</p>
          <p className={playerOne.battles > playerTwo.battles ? 'green' : 'red'}>losses:{playerOne.losses}</p>
          <p className={playerOne.battles > playerTwo.battles ? 'green' : 'red'}>destroyed:{playerOne.frags}</p>
          <p className={playerOne.battles > playerTwo.battles ? 'green' : 'red'}>won and survived:{playerOne.win_and_survived}</p>
          <p className={playerOneAccuracy > playerTwoAccuracy ? 'green' : 'red'}>accuracy:{playerOneAccuracy.toFixed(2)}%</p>
      </div>

        <div className='player2'>
          <h1 style={{ color: 'orange' }}>{playerTwoNickname}</h1>
          <br />
          <p className={playerOne.battles < playerTwo.battles ? 'green' : 'red'}>battles:{playerTwo.battles}</p>
          <p className={playerOne.wins < playerTwo.wins ? 'green' : 'red'}>wins:{playerTwo.wins}</p>
          <p className={playerOne.battles < playerTwo.battles ? 'green' : 'red'}>losses:{playerTwo.losses}</p>
          <p className={playerOne.battles < playerTwo.battles ? 'green' : 'red'}>destroyed:{playerTwo.frags}</p>
          <p className={playerOne.battles < playerTwo.battles ? 'green' : 'red'}>won and survived:{playerTwo.win_and_survived}</p>
          <p className={playerOneAccuracy < playerTwoAccuracy ? 'green' : 'red'}>accuracy:{playerTwoAccuracy.toFixed(2)}%</p>
          
          <br />
          
          <br />
          
          <br />
          
          <br />
          
      </div>
      </div>
    );
  }
}

export default PlayerComparison;
