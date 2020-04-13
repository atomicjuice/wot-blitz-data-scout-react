import React, { Component } from 'react';
import '../Css/UserStatsStyle.css'

class UserStats extends Component {

  state = {
    player: this.props.player
  }
  render() {
    const player = this.state.player
    const nickname = this.state.player.nickname
    return (
      <div>
        {console.log()}
        <h1>Player name: {nickname}</h1>
        <br></br>
      </div>
    );
  }
}

export default UserStats;
