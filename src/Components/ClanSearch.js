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
        if(json.data[0] === undefined){
          alert('Clan Not Found')
        }
        else{
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
      <div className='searchBar'> 
        <form onSubmit={this.handleSubmit}>
          <input name="clanname" type="text" placeholder="Enter Clan Name" className='input'></input>
          <input type="submit" value="Scout" className='button' />
        </form>
      </div>
    );
  }
}

export default withRouter(ClanSearch);


// if (!clans) {
//   localStorage.setItem('clans', JSON.stringify({ [name] : ID }))
// }
// else {
//   let retreivedData = localStorage.getItem('clans')
//   let clanArray = JSON.parse(retreivedData)
//   clanArray[name] = ID
//   localStorage.setItem('clans', JSON.stringify(clanArray))
//   console.log(localStorage)
// }