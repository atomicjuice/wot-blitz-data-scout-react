import React, { Component } from 'react';
import '../Css/HomeScreen.css'

class HomeScreen extends Component {

    renderTitle = () => {

       return <p id='title'>World of Tanks Blitz Data Scout</p>
    }

    componentDidMount () {
        setTimeout(() =>{
            const home = document.querySelector('#home')
            let p = document.createElement('p')
            p.id = 'title'
            p.innerText = 'World of Tanks Blitz Data Scout'
            home.appendChild(p)
        }, 2000)

    }

    render() {
        return (
            <div id='home'>
                <h1 className='context'>Welcome to..</h1>
            </div>
        );
    }
}


export default HomeScreen;
