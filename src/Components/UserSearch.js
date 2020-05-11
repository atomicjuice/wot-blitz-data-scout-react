import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../Css/SearchStyle.css'


class UserSearch extends Component {


  renderUserStats = () => {
    this.props.history.push('/userstats')
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
        const id = json.data[0].account_id
        this.fetchUserInfo(id)
      })
  }



  render() {
    return (
      <div className='userSearch'>
              <form onSubmit={this.handleSubmit} className='searchbar'>
              <h1>Player Search</h1>
              <br />
              <br />
              <br />
              <input name="nickname" type="text" placeholder="Nickname" ></input>
              <br />
              <br />
              <input type="submit" value="Scout" />
            </form>/>
      </div>
    );
  }
}

export default withRouter(UserSearch);