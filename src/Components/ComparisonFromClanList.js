import React, { Component } from 'react';
import '../Css/Lists.css'


class ComparisonFromClanList extends Component {


  checkList = () => {
      const setClanTwoComparisonIDfromList = this.props.setClanTwoComparisonIDfromList
      const clansObject = localStorage.getItem('clanList')
      const clans = JSON.parse(clansObject)
      const clanNames = Object.keys(clans)
      const list = clanNames.map(name => <li className='itemContainer'><button className='clanNameComparison' onClick={() => setClanTwoComparisonIDfromList(name)}> Compare With: {name}</button></li> )
      return list
    }

  render() {
    return (
      <div className='clanList'>
        <p className='selectFromListContext'>Select a Clan you wish to compare with</p>
        {this.checkList()}
      </div>
    );
  }
}

export default ComparisonFromClanList;