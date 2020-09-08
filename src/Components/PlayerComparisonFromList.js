import React, { Component } from 'react';
import '../Css/Lists.css'


class PlayerComparisonFromList extends Component {

  checkList = () => {
      const setPlayerTwoComparisonIDfromList = this.props.setPlayerTwoComparisonIDfromList
      const playersObject = localStorage.getItem('playerList')
      const players = JSON.parse(playersObject)
      const playersNames = Object.keys(players)
      const list =  playersNames.map(name => <li className='itemContainer'><button className='playerNameComparison' onClick={() => setPlayerTwoComparisonIDfromList(name)}>Compare With: {name}</button></li>)
      return list
    }
  
  render() {

    return (
      <div className='playerList'>
        <p className='selectFromListContext'>Select a Player you wish to compare with</p>
        {this.checkList()}
      </div>
    );
  }
}

export default PlayerComparisonFromList;
