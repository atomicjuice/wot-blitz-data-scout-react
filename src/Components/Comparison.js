import React, { Component } from 'react';
import '../Css/PlayerComparison.css'

class Comparison extends Component {

  Line = () => {
    return(
      <div classname='line'></div>
    )
  }

  render() {
    return (      
      <div className='split'>
      <h1>Compare these players</h1>
      <div className='player1'>
        <h1>{this.props.playerOne.nickname}</h1> 
        <br/>
        battles:{this.props.playerOne.battles}
        <br/>
        wins:{this.props.playerOne.wins}
        <br/>
        losses:{this.props.playerOne.losses}
        <br/>
        destroyed:{this.props.playerOne.frags}
        <br/>
        won and survived:{this.props.playerOne.win_and_survived}
      </div>
      <div className='graph-wrapper'>
        <div className='graph'>
          <this.Line/>
        </div>
      </div>
      <div className='player2'>
        <h1>{this.props.playerTwo.nickname}</h1>
        <br/>
        battles:{this.props.playerTwo.battles}
        <br/>
        wins:{this.props.playerTwo.wins}
        <br/>
        losses:{this.props.playerTwo.losses}
        <br/>
        destroyed:{this.props.playerTwo.frags}
        <br/>
        won and survived:{this.props.playerTwo.win_and_survived}
      </div>
    </div>
    );
  }
}

export default Comparison;
