import React, { Component } from 'react';
import Comparison from '../Components/PlayerComparison'

class ComparisonContainer extends Component {

  apikey = this.props.apikey

  state = {
    playerOneID: this.props.playerOneID,
    playerTwoID: this.props.playerTwoID,
    playerOneInfo: {},
    playerTwoInfo: {}
  }

  componentDidMount() {
    fetch(`https://api.wotblitz.eu/wotb/account/info/?application_id=e1b0f1413b1e3a755bcaf4c109c19673&account_id=${this.state.playerOneID}`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json.data[this.props.players[0]].nickname)
        const playerInfo = json.data[this.props.players[0]].statistics.all
        const playerNameAndStats = { nickname: json.data[this.props.players[0]].nickname, ...playerInfo }
        this.setState({
          playerOneInfo: playerNameAndStats
        })
      })
    fetch(`https://api.wotblitz.eu/wotb/account/info/?application_id=e1b0f1413b1e3a755bcaf4c109c19673&account_id=${this.state.playerTwoID}`)
      .then(resp => resp.json())
      .then(json => {
        const playerInfo = json.data[this.props.players[1]].statistics.all
        const playerNameAndStats = { nickname: json.data[this.props.players[1]].nickname, ...playerInfo }
        this.setState({
          playerTwoInfo: playerNameAndStats
        })
      })
  }


  render() {
    return (
      <div className='con'>
        <Comparison playerOne={this.state.playerOneInfo} playerTwo={this.state.playerTwoInfo} />
      </div>
    );
  }
}

export default ComparisonContainer;
