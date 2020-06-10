import React, { Component } from 'react';
import '../Css/Lists.css'


class ComparisonFromClanList extends Component {


  checkList = () => {
    if (!localStorage.getItem('clanList')) {
      return <h2>Your clan list is empty, search clans to add them to your list</h2>
    }else{
      const renderClanFromList = this.props.renderClanFromList
      const clansObject = localStorage.getItem('clanList')
      const clans = JSON.parse(clansObject)
      const clanNames = Object.keys(clans)
      const list = clanNames.map(name => <li className='clanName'><button onClick={() => renderClanFromList(name)}><br />{name}</button></li> )
      return list
    }
  }

  render() {
    return (
      <div className='clanList'>
        {this.checkList()}
      </div>
    );
  }
}

export default ComparisonFromClanList;