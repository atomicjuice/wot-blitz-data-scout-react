import React, { Component } from 'react';
import '../Css/Lists.css'


class ComparisonFromClanList extends Component {


  checkList = () => {
    if (!localStorage.getItem('clanList')) {
      return <h2>Your clan list is empty, search clans to add them to your list</h2>
    }else{
      const setClanTwoComparisonIDfromList = this.props.setClanTwoComparisonIDfromList
      const clansObject = localStorage.getItem('clanList')
      const clans = JSON.parse(clansObject)
      const clanNames = Object.keys(clans)
      const list = clanNames.map(name => <li className='itemContainer'><button className='clanNameComparison' onClick={() => setClanTwoComparisonIDfromList(name)}> Compare With: {name}</button></li> )
      return list
    }
  }

  render() {
    return (
      <div className='clanList'>
        <p className='selectFromListContext'>Select a Player you wish to compare with</p>
        {this.checkList()}
      </div>
    );
  }
}

export default ComparisonFromClanList;