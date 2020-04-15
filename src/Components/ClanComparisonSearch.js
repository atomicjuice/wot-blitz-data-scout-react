import React, { Component } from 'react';


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
      <form onSubmit={this.handleSubmit} className='compareClanSearchbar'>
        <h1>Enter Clan To Compare With</h1>
        <br />
        <br />
        <br />
        <input onChange={this.onChange} name="Clan" type="text" placeholder="Clan" ></input>
        <br />
        <br />
        <input type="submit" value="Scout" />
      </form>
    );
  }
}

export default ClanComparisonSearch;
