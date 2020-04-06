import {Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import DashBoard from './Components/DashBoard';
import UserSearch from './Components/UserSearch';
import NavBar from './Components/NavBar'
import UserStatsContainer from './Containers/UserStatsContainer'
import Header from './Components/Header'


import React, { Component } from 'react';

class App extends Component {

  state = {
    currentUser:null,
    account_id:null
  }

  componentDidMount(){
    this.setState({
      currentUser:localStorage.getItem('nickname'),
      account_id:localStorage.getItem('account_id')
    })
  }

  setCurrentUser = (nickname, account_id) => {
    this.setState({
      currentUser:nickname,
      account_id: account_id
    })
    console.log(this);
  }

  render() {
    return (
      <div >
      <BrowserRouter>
      <NavBar/>
      {/* <Header/> */}
      <Route exact path="/userstats" render={() => <UserStatsContainer/>}></Route>
      <Route exact path="/landingpage" render={() => <LandingPage/>}></Route>
      <Route exact path="/dashboard" render={() => <DashBoard/>}></Route>
      <Route exact path="/usersearch" render={() => <UserSearch setCurrentUser={this.setCurrentUser}/>}></Route>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;

