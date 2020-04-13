import React, { Component } from 'react';
import '../Css/Lists.css'


class ClanList extends Component {


  render() {
    const renderClanFromList = this.props.renderClanFromList
    const clansObject = localStorage.getItem('clanList')
    const clans = JSON.parse(clansObject)
    const clanNames = Object.keys(clans)
    const list = clanNames.map(name => <li className='clanName'><button onClick={() => renderClanFromList(name)}><br />{name}</button></li> )
    // const list2 = 
    return (
      <ul>
        {console.log(clans)
        }
        {list}
        {/* {list2} */}
      </ul>
    );
  }
}

export default ClanList;
