import React, { Component } from 'react';
import '../Css/Lists.css'
import { withRouter } from 'react-router-dom'


class ClanList extends Component {

  removeClanFromList = (name) => {
    const clanList = localStorage.getItem('clanList')
    const clanListParsed = JSON.parse(clanList)
    delete clanListParsed[name]
    localStorage.setItem('clanList', JSON.stringify(clanListParsed))
    this.props.history.push('/clanList')
  }

  checkList = () => {
    if (!localStorage.getItem('clanList') || localStorage.getItem('clanList') === "{}") {
      return <h2 className='emptyList' >Your clan list is empty, search clans to add them to your list</h2>
    } else {
      const renderClanFromList = this.props.renderClanFromList
      const clansObject = localStorage.getItem('clanList')
      const clans = JSON.parse(clansObject)
      const clanNames = Object.keys(clans)
      const list = clanNames.map(name => <li className='itemContainer' ><button className='clanName' onClick={() => renderClanFromList(name)}>View: {name}</button>
        <button className='removeButton' onClick={() => this.removeClanFromList(name)}>Remove Clan From List</button> </li>)
      return list
    }
  }

  render() {
    return (
      <div>
        <p className='listContextMaster'>
          This list is where you can select to view any one of the clans</p>
        <p className='listContext' > which you previously decided to add to your list,</p>
        <p className='listContext'>
          or if you wish you can also remove a clan from your list as well.
        </p>
        <div className='clanList'>
          {this.checkList()}
        </div>
      </div>

    )
  }
}

export default withRouter(ClanList);
