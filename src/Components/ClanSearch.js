import React, { Component } from 'react';
import '../Css/SearchStyle.css';
import { withRouter } from 'react-router-dom'

class ClanSearch extends Component {

  state = {
    id: null,
    clan: null
  }

  renderClanStats = () => {
    this.props.history.push('/clanstats')
  }

  fetchClanInfo = (name, id) => {
    fetch(`https://api.wotblitz.eu/wotb/clans/info/?application_id=${this.props.apikey}&clan_id=${id}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[this.state.id]
        localStorage.setItem('currentClan', JSON.stringify(info))
        this.setState({
          clan: info
        })
        this.props.setCurrentClan(name, id, info)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    fetch(`https://api.wotblitz.eu/wotb/clans/list/?application_id=${this.props.apikey}&search=${name}`)
      .then(resp => resp.json())
      .then(json => {
        if (json.data === undefined || json.data[0] === undefined) {
          alert('Clan Not Found')
        }
        else {
          const ID = json.data[0].clan_id
          this.setState({
            id: ID
          })
          this.fetchClanInfo(name, ID)
        }
      })
  }

  render() {
    return (
      <div>
        <p id='clanSearchContext'>Type in the name of the clan you wish to scout</p>
        <div className='searchBar'>
          <form onSubmit={this.handleSubmit}>
            <input name="clanname" type="text" placeholder="Enter Clan Name" className='input'></input>
            <input type="submit" value="Scout" className='button' />
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(ClanSearch);