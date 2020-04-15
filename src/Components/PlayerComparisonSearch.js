import React, { Component } from 'react';
import '../Css/SearchStyle.css'

class ComparisonSearch extends Component {


  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.wotblitz.eu/wotb/account/list/?application_id=${this.props.apikey}&search=${e.target[0].value}`)
      .then(resp => resp.json())
      .then(json => {
        const user = json.data[0]
        this.props.setPlayerTwoComparisonID(user.nickname, user.account_id)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='searchbar'>
        <h1>Enter Player To Compare With</h1>
        <br />
        <br />
        <br />
        <input onChange={this.onChange} name="nickname" type="text" placeholder="Nickname" ></input>
        <br />
        <br />
        <input type="submit" value="Scout" />
      </form>
    );
  }
}

export default ComparisonSearch;
