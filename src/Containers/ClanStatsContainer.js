import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ClanStatsContainer extends Component {
state = {
      clanInfo: localStorage.getItem('currentClan'),
      clanID: this.props.currentClanID
    }
  

  // `https://api.wotblitz.eu/wotb/clans/info/?application_id=f2e055f4250f8cb83b5ada0a424e3f8c&clan_id=83673`


  componentWillMount() {
    fetch(`https://api.wotblitz.eu/wotb/clans/info/?application_id=${process.env.REACT_APP_WOT_API_KEY}&clan_id=${this.state.clanID}`)
      .then(resp => resp.json())
      .then(json => {
        console.log(this.state)
        console.log(json.data[this.state.clanID])
        const info = json.data[this.state.clanID]
        localStorage.setItem('currentClan', JSON.stringify(info))
        console.log(this.state)
      })
  }

  


  render() {
    const clanInfo = this.state.clanInfo
    return (
      
      <div>
        clan stats
        {console.log(clanInfo.name)}
      </div>
    );
  }
}

export default withRouter(ClanStatsContainer);