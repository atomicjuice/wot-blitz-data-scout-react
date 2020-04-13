import React, { Component } from 'react';
import '../Css/SearchStyle.css'

class ComparisonSearch extends Component {


  renderComparison= () => {
    this.props.history.push('/comparison')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.wotblitz.eu/wotb/account/list/?application_id=${process.env.REACT_APP_WOT_API_KEY}&search=${e.target[0].value}`)
    .then(resp => resp.json())
    .then(json => {
      const user=json.data[0]
      this.props.setPlayerToCompare(user.nickname,user.account_id)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='searchbar'>
      <br/>
      <br/>
      <br/>
      <input onChange={this.onChange} name="nickname" type="text" placeholder="Nickname" ></input>
      <br/>
      <br/> 
      <input type="submit" value="Scout"/>
    </form>
    );
  }
}

export default ComparisonSearch;
