import React, { Component } from 'react';
import '../Css/PlayerComparison.css'

class PlayerComparison extends Component {

  state = {
    playerOne: this.props.currentPlayerInfo.statistics.all,
    playerTwo: this.props.playerToCompareInfo.statistics.all
  }

  render() {
    const playerOneNickname = this.props.currentPlayerInfo.nickname
    const playerOne = this.state.playerOne
    const playerTwoNickname = this.props.playerToCompareInfo.nickname
    const playerTwo = this.state.playerTwo
    return (      
      <div className='split'>


      <h1>Compare these players</h1>
      <div className='player1'>
        <h1>{playerOneNickname}</h1> 
        <br/>
        battles:{playerOne.battles}
        <br/>
        wins:{playerOne.wins}
        <br/>
        losses:{playerOne.losses}
        <br/>
        destroyed:{playerOne.frags}
        <br/>
        won and survived:{playerOne.win_and_survived}
      </div>

      <div className='player2'>
        <h1>Name: {playerTwoNickname}</h1>
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
      </div>
    </div>
    );
  }
}

export default PlayerComparison;
