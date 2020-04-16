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


        {/* <h1>player Comparison</h1> */}
        <div className='player1' >
          <h1 style={{ color: 'blue' }}>{playerOneNickname}</h1>
          <br />
          <p>battles:{playerOne.battles}</p>
          {/* {playerOne.battles>playerTwo.battles ?  } */}
          wins:{playerOne.wins}
          <br />
          losses:{playerOne.losses}
          <br />
          destroyed:{playerOne.frags}
          <br />
          won and survived:{playerOne.win_and_survived}
          <br />
          accuracy:{playerOneAccuracy.toFixed(2)}%
      </div>

        <div className='player2'>
          <h1 style={{ color: 'orange' }}>{playerTwoNickname}</h1>
          <br />
          battles:{playerTwo.battles}
          <br />
          wins:{playerTwo.wins}
          <br />
          losses:{playerTwo.losses}
          <br />
          destroyed:{playerTwo.frags}
          <br />
          won and survived:{playerTwo.win_and_survived}
          <br />
          accuracy:{playerTwoAccuracy.toFixed(2)}%
      </div>
      </div>
    );
  }
}

export default PlayerComparison;
