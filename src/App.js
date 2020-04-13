import { Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import DashBoard from './Components/DashBoard';
import UserSearch from './Components/UserSearch';
import NavBar from './Components/NavBar'
import UserStatsContainer from './Containers/UserStatsContainer'
import Container from '@material-ui/core/Container';
import ComparisonSearch from './Components/ComparisonSearch'
import ComparisonContainer from './Containers/ComparisonContainer'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react';
import ClanSearch from './Components/ClanSearch';
import ClanStats from './Components/ClanStats'
import ClanStatsContainer from './Containers/ClanStatsContainer'
import ClanList from './Components/ClanList';

class App extends Component {

  state = {
    apikey:"f2e055f4250f8cb83b5ada0a424e3f8c",
    currentUser: "KParadox",
    account_id: 529829705,
    playerToCompareNickname: "Crazy_AssasinjApple",
    playerToCompareId: 540130546,
    usersForComparison: [529829705, 540130546],
    clanList: {'Club Penguin': 114681, 'Valkyrie Rising': 83673},
    currentClanName: null,
    currentClanID: null,
    currentClanInfo: null,
    clanTocompareName: null,
    clanTocompareID: null,
    clanTocompareinfo: null,
  }

  setClanList = (clans) => {
    this.setState({
      clanList:clans
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

  setCurrentUser = (nickname, account_id) => {
    this.setState({
      currentUser: nickname,
      account_id: account_id,
      usersForComparison: [...this.state.usersForComparison, account_id]
    })
    console.log(this.state);
  }

  setPlayerToCompare = (nickname, account_id) => {
    this.setState({
      playerToCompareNickname: nickname,
      playerToCompareId: account_id,
      usersForComparison: [...this.state.usersForComparison, account_id]
    })
    this.props.history.push('/comparison')
  }

  addToComparison = id => {
    this.setState({
      playerToCompareId: id
    })
  }

  renderClanFromList = (name) => {
    // console.log(this.state.clanList[name])
    const id = this.state.clanList[name]
    console.log(id)
    fetch(`https://api.wotblitz.eu/wotb/clans/info/?application_id=${this.state.apikey}&clan_id=${id}`)
      .then(resp => resp.json())
      .then(json => {
        const info = json.data[id]
        localStorage.setItem('currentClan', JSON.stringify(info))
        console.log(json)
        this.setCurrentClan(name, id, info)
        // this.renderClanStats()
      })
  }

  render() {
    // console.log("APP RENDER", this.props.location)
    return (
      <div >
        <NavBar />
        <Container >
          <Route exact path="/userstats" render={() => <UserStatsContainer
            usernickname={this.state.currentUser}
            account_id={this.state.account_id}
            addToComparison={this.addToComparison}
          />}></Route>
          <Route exact path="/clanlist" render={() => <ClanList renderClanFromList={this.renderClanFromList}/>}/>
          <Route exact path="/clanstats" render={() => <ClanStats clan={this.state.currentClanInfo} setClanList={this.setClanList}/> }></Route>
          <Route exact path="/clansearch" render={() => <ClanSearch setCurrentClan={this.setCurrentClan} apikey={this.state.apikey}/>}></Route>
          <Route exact path="/landingpage" render={() => <LandingPage />}></Route>
          <Route exact path="/dashboard" render={() => <DashBoard />}></Route>
          <Route exact path="/usersearch" render={() => <UserSearch setCurrentUser={this.setCurrentUser} />}></Route>
          <Route exact path="/comparison" render={() => <ComparisonContainer players={this.state.usersForComparison} />}></Route>
          <Route exact path="/comparisonsearch" render={() => <ComparisonSearch setPlayerToCompare={this.setPlayerToCompare} />}></Route>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
