import React, { Component } from 'react';
import '../Css/HomeScreen.css'

class HomeScreen extends Component {

    renderTitle = () => {

       return <p id='title'>World of Tanks Blitz Data Scout</p>
    }

    componentDidMount () {
        setTimeout(() =>{
            const home = document.querySelector('#home')
            let title = document.createElement('p')
            title.id = 'title'
            title.innerText = 'World of Tanks Blitz Data Scout'
            home.appendChild(title)
        }, 500)
        setTimeout(() => {
            const home = document.querySelector('#home')
            let context = document.createElement('p')
            context.id = 'mainContext'
            context.innerText = 'Your free online data inspector for the world of tanks blitz MMO game. \n\n choose from whether to inspect a player or clan above to get started.'
            home.appendChild(context)            
        }, 1500 )

    }

    render() {
        return (
            <div id='home'>
                <h1 className='context'>Welcome to..</h1>

                {/* <p id="mainContext" >Your free online data inspector for the world of tanks blitz MMO game. choose from whether to inspect a player or clan above to get started</p> */}
            </div>
        );
    }
}


export default HomeScreen;
