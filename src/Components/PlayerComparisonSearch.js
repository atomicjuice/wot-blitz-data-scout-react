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
      <div className='searchBar'>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} name="nickname" type="text" placeholder="Insert Player Name" className='input'></input>
          <input type="submit" value="Scout" className='button'/>
        </form>
      </div>
    );
  }
}

export default ComparisonSearch;
