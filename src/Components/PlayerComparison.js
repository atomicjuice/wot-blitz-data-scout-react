import React, { Component } from 'react';
import '../Css/PlayerComparison.css'

class PlayerComparison extends Component {

  // playerTwofromlocalStorage = 

  state = {
    playerOne: this.props.currentPlayerInfo.statistics.all,
    playerTwo: this.props.playerToCompareInfo.statistics.all
  }

  render() {
    const playerOneNickname = this.props.currentPlayerInfo.nickname
    const playerOne = this.state.playerOne
    const playerTwoNickname = this.props.playerToCompareInfo.nickname
    const playerTwo = this.state.playerTwo
    const playerOneAccuracy = playerOne.hits / playerOne.shots * 100
    const playerTwoAccuracy = playerTwo.hits / playerTwo.shots * 100
    return (      
      <div className='split'>


      {/* <h1>player Comparison</h1> */}
      <div className='player1' >
        <h1 style={{color: 'green'}}>{playerOneNickname}</h1> 
        <br/>
        battles:{playerOne.battles} 
        {/* {playerOne.battles>playerTwo.battles ?  } */}
        <br/>
        wins:{playerOne.wins}
        <br/>
        losses:{playerOne.losses}
        <br/>
        destroyed:{playerOne.frags}
        <br/>
        won and survived:{playerOne.win_and_survived}
        <br/>
        accuracy:{playerOneAccuracy.toFixed(2)}%
      </div>

      <div className='player2'>
        <h1>{playerTwoNickname}</h1>
        <br/>
        battles:{playerTwo.battles}
        <br/>
        wins:{playerTwo.wins}
        <br/>
        losses:{playerTwo.losses}
        <br/>
        destroyed:{playerTwo.frags}
        <br/>
        won and survived:{playerTwo.win_and_survived}
        <br/>
        accuracy:{playerTwoAccuracy.toFixed(2)}%
      </div>
    </div>
    );
  }
}

export default PlayerComparison;
