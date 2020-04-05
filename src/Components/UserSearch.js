import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import '../Css/UserSearchStyle.css'


class UserSearch extends Component {

  state = {
    nickname:null
  }

  onChange = (e) => {
    this.setState({

    })
  }

renderUserStats= () => {
  this.props.history.push('/userstats')
}

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.wotblitz.eu/wotb/account/list/?application_id=${process.env.REACT_APP_WOT_API_KEY}&search=${e.target[0].value}`)
    .then(resp => resp.json())
    .then(json => {
      const user=json.data[0]
      this.props.setCurrentUser(user.nickname,user.account_id)
      localStorage.setItem('nickname', user.nickname)
      localStorage.setItem('account_id', user.account_id)
      console.log(json)
      this.renderUserStats()
    })
  }


  render() {
    return (
        <form onSubmit={this.handleSubmit} className='searchbar'>
          <br/>
          <br/>
          <br/>
          <input onChange={this.handleChange} name="nickname" type="text" placeholder="Nickname" ></input>
          <br/>
          <br/> 
          <input type="submit" value="Scout"/>
        </form>
    );
  }
}

export default withRouter(UserSearch);