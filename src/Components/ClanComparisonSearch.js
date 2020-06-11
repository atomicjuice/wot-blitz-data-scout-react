import React, { Component } from 'react';
import '../Css/SearchStyle.css'



class ClanComparisonSearch extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    fetch(`https://api.wotblitz.eu/wotb/clans/list/?application_id=${this.props.apikey}&search=${name}`)
      .then(resp => resp.json())
      .then(json => {
        const ID = json.data[0].clan_id
        this.setState({
          id: ID
        })
        this.props.setClanTwoComparisonID(name, ID)
      })
  }

  render() {
    return (
      <div className='searchBar'>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.onChange} name="Clan" type="text" placeholder="Enter Clan Name" className='input' ></input>
          <input type="submit" value="Scout" className='button' />
        </form>
      </div>

    );
  }
}

export default ClanComparisonSearch;
