import React, { Component } from 'react';
import UserStats from '../Components/UserStats'
import '../Css/UserStatsStyle.css'

class UserStatsContainer extends Component {

  state = {
    destroyed:null,
    battles:null,
    winAndSurvived:null,
    wins:null,
    losses:null,
    shots:null,
    hits:null,
    accuracy:null
  }

  componentWillMount(){
    fetch(`https://api.wotblitz.eu/wotb/account/info/?application_id=e1b0f1413b1e3a755bcaf4c109c19673&account_id=${localStorage.account_id}`)
    .then(resp => resp.json())
    .then(json => {
      const stats = json.data[localStorage.account_id].statistics.all
      const accuracy = stats.hits/stats.shots*100
      // console.log(accuracy.toFixed(2));
      
    this.setState({
      destroyed:stats.frags,
      battles:stats.battles,
      winAndSurvived:stats.win_and_survived,
      wins:stats.wins,
      losses:stats.losses,
      shots:stats.shots,
      hits:stats.hits,
      accuracy: accuracy.toFixed(2)
    })
    // console.log(this.state)
    })
  }

  // const mainPlayerData = json.data[localStorage.account_id].statistics.all

  // componentWillMount(){
  //   console.log(localStorage.nickname)
  // }


  render() {
    return (
      <div >
        {console.log(this.state)}
        <UserStats info={this.state}/>
      </div>
    );
  }
}

export default UserStatsContainer;
