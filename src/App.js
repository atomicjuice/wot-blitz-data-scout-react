import { Route } from 'react-router-dom'
import UserSearch from './Components/UserSearch';
import NavBar from './Components/NavBar'
// import Container from '@material-ui/core/Container';
import PlayerComparisonSearch from './Components/PlayerComparisonSearch'
import PlayerComparison from './Components/PlayerComparison'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import ClanSearch from './Components/ClanSearch';
import ClanStats from './Components/ClanStats'
import PlayerList from './Components/PlayerList'
import ClanList from './Components/ClanList';
import PlayerStats from './Components/PlayerStats'
import ClanComparisonSearch from './Components/ClanComparisonSearch'
import ClanComparison from './Components/ClanComparison'
import PlayerComparisonFromList from './Components/PlayerComparisonFromList'
import ComparisonFromClanList from './Components/ComparisonFromClanList'
import './App.css'
import backgroundVideo from './video/openshot-edit2.mp4'


class App extends Component {

  state = {
    apikey: "f2e055f4250f8cb83b5ada0a424e3f8c",
    currentUser: null,
    currentUserID: null,
    currentPlayerInfo: null,
    playerToCompareInfo: null,
    playerToCompareNickname: null,
    playerOneID: null,
    playerTwoID: null,
    playerList: null,
    clanList: null,
    currentClanName: null,
    currentClanID: null,
    currentClanInfo: null,
    clanTocompareName: null,
    clanTocompareID: null,
    clanTocompareinfo: null,
  }

  setClanList = (clans) => {
    this.setState({
      clanList: clans
    })
  }

  setPlayerList = (players) => {
    this.setState({
      playerList: players
    })
  }

  setCurrentClan = (name, ID, info) => {
    this.setState({
      currentClanName: name,
      currentClanID: ID,
      currentClanInfo: info
    })
    this.props.history.push('/clanstats')
  }

  setCurrentUser = (nickname, ID, info) => {
    this.setState({
      currentUser: nickname,
      currentUserID: ID,
      currentPlayerInfo: info,
    })
    this.props.history.push('/playerstats')
  }

  setClanTwoComparisonIDfromList = name => {

    const clanList = localStorage.getItem('clanList')
    const clanListParsed = JSON.parse(clanList)
    const clanID = clanListParsed[name]
    
    fetch(`https://api.wotblitz.eu/wotb/clans/info/?application_id=${this.state.apikey}&clan_id=${clanID}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[clanID]
        localStorage.setItem('comparisonClan', JSON.stringify(info))
        this.setState({
          clanTocompareinfo: info
        })
        this.props.history.push('/clancomparison')
      })
  }

  setPlayerTwoComparisonIDfromList = (nickname) => {
    const playerList = localStorage.getItem('playerList')
    const playerListParsed = JSON.parse(playerList)
    const PlayerID = playerListParsed[nickname]
    fetch(`https://api.wotblitz.eu/wotb/account/info/?application_id=${this.state.apikey}&account_id=${PlayerID}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[PlayerID]
        this.setState({
          playerToCompareInfo: info
        })
        localStorage.setItem('comparisonPlayer', JSON.stringify(info))
        this.props.history.push('/PlayerComparison')
      })
    }

  setPlayerTwoComparisonID = (nickname, id) => {
    this.setState({
      playerToCompareNickname: nickname,
      playerTwoID: id,
    })
    fetch(`https://api.wotblitz.eu/wotb/account/info/?application_id=${this.state.apikey}&account_id=${id}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[id]
        this.setState({
          playerToCompareInfo: info
        })
        localStorage.setItem('comparisonPlayer', JSON.stringify(info))
        this.props.history.push('/PlayerComparison')
      })
  }

  compareFromPlayerList = id => {
    this.setState({
      playerOneID: id
    })
    this.props.history.push('/playerlistForComparison')
  }

  comparisonFromClanList = id => {
    this.setState({
      playerOneID: id
    })
    this.props.history.push('/comparisonFromClanList')
  }

  setClanOneComparisonID = id => {
    this.setState({
      clanTocompareID: id
    })
    this.props.history.push('/clanListForComparison')
  }

  setPlayerOneComparisonID = id => {
    this.setState({
      playerOneID: id
    })
    this.props.history.push('/playerComparisonSearch')
  }

  setClanOneComparisonID = id => {
    this.setState({
      clanTocompareID: id
    })
    this.props.history.push('/ClanComparisonSearch')
  }

  setClanTwoComparisonID = (name, id) => {
    fetch(`https://api.wotblitz.eu/wotb/clans/info/?application_id=${this.state.apikey}&clan_id=${id}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[id]
        localStorage.setItem('comparisonClan', JSON.stringify(info))
        this.setState({
          clanTocompareinfo: info
        })
        this.props.history.push('/clancomparison')
      })
  }

  renderPlayerFromList = (name) => {
    const playerListFromLocalStorage = localStorage.getItem('playerList')
    const playerListParsed = JSON.parse(playerListFromLocalStorage)
    const id = playerListParsed[name]
    fetch(`https://api.wotblitz.eu/wotb/account/info/?application_id=${this.state.apikey}&account_id=${id}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[id]
        localStorage.setItem('currentPlayer', JSON.stringify(info))
        this.setCurrentUser(name, id, info)
      })
  }

  renderClanFromList = (name) => {
    const clanListFromLocalStorage = localStorage.getItem('clanList')
    const clanListParsed = JSON.parse(clanListFromLocalStorage)
    const id = clanListParsed[name]
    console.log([name])
    fetch(`https://api.wotblitz.eu/wotb/clans/info/?application_id=${this.state.apikey}&clan_id=${id}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[id]
        localStorage.setItem('currentClan', JSON.stringify(info))
        console.log(json)
        this.setCurrentClan(name, id, info)
      })
  }

  render() {
    return (
      <div className='container mainBackground'>
        <NavBar />
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Route exact path="/comparisonFromClanList" render={() => <ComparisonFromClanList setClanTwoComparisonIDfromList={this.setClanTwoComparisonIDfromList} />}></Route>
        <Route exact path="/playerlistForComparison" render={() => <PlayerComparisonFromList setPlayerTwoComparisonIDfromList={this.setPlayerTwoComparisonIDfromList}/>}></Route>
        <Route exact path="/usersearch" render={() => <UserSearch setCurrentUser={this.setCurrentUser} apikey={this.state.apikey} />}></Route>
        <Route exact path="/clansearch" render={() => <ClanSearch setCurrentClan={this.setCurrentClan} apikey={this.state.apikey} />}></Route>
        <Route exact path="/playerstats" render={() => <PlayerStats setPlayerList={this.setPlayerList} player={this.state.currentPlayerInfo} setPlayerOneComparisonID={this.setPlayerOneComparisonID} compareFromPlayerList={this.compareFromPlayerList} />}></Route>
        <Route exact path="/clanstats" render={() => <ClanStats clan={this.state.currentClanInfo} setClanList={this.setClanList} setClanOneComparisonID={this.setClanOneComparisonID} comparisonFromClanList={this.comparisonFromClanList} />}></Route>
        <Route exact path="/playerlist" render={() => <PlayerList renderPlayerFromList={this.renderPlayerFromList} />} />
        <Route exact path="/clanlist" render={() => <ClanList renderClanFromList={this.renderClanFromList} />} />
        <Route exact path="/playerComparison" render={() => <PlayerComparison currentPlayerInfo={this.state.currentPlayerInfo} playerToCompareInfo={this.state.playerToCompareInfo} />}></Route>
        <Route exact path="/playerComparisonSearch" render={() => <PlayerComparisonSearch setPlayerTwoComparisonID={this.setPlayerTwoComparisonID} apikey={this.state.apikey} />}></Route>
        <Route exact path="/clancomparisonsearch" render={() => <ClanComparisonSearch apikey={this.state.apikey} setClanTwoComparisonID={this.setClanTwoComparisonID} />} />
        <Route exact path="/clancomparison" render={() => <ClanComparison currentClanInfo={this.state.currentClanInfo} clanTocompareinfo={this.state.clanTocompareinfo} />}></Route>
      </div>
    );
  }
}

export default withRouter(App);






