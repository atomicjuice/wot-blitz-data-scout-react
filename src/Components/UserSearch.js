import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../Css/SearchStyle.css'
import '../App.css'


class UserSearch extends Component {


  renderPlayerStats = () => {
    this.props.history.push('/playerstats')
  }

  fetchUserInfo = (id) => {
    fetch(`https://api.wotblitz.eu/wotb/account/info/?application_id=${this.props.apikey}&account_id=${id}`)
      .then(resp => resp.json())
      .then(json => {
        const nickname = json.data[id].nickname
        const playerInfo = json.data[id]
        localStorage.setItem('currentPlayer', JSON.stringify(playerInfo))
        console.log()
        this.props.setCurrentUser(nickname, id, playerInfo)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    fetch(`https://api.wotblitz.eu/wotb/account/list/?application_id=${this.props.apikey}&search=${name}`)
      .then(resp => resp.json())
      .then(json => {
        if (json.data === undefined || json.data[0] === undefined) {
          alert('Player Not Found')
          this.props.history.push('/usersearch')
        } else {
          const id = json.data[0].account_id
          this.fetchUserInfo(id)
        }
      })
  }



  render() {
    return (
      <div>
        <p id='playerSearchContext'>Type in the name of the player you wish to scout</p>
        <div className='searchBar'>
          <form onSubmit={this.handleSubmit} >
            <input name="nickname" type="text" placeholder="Insert Player Name" className='input'></input>
            <input type="submit" value="Scout" className='button' />
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(UserSearch);