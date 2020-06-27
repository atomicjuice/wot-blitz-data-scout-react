import React, { Component } from 'react';
import '../Css/HomeScreen.css'

class HomeScreen extends Component {


    typeWriter = () => {
        var i = 0;
        var txt = 'World of Tanks Data Scout'; /* The text */
        var speed = 50; /* The speed/duration of the effect in milliseconds */
        if (i < txt.length) {
            document.getElementsByClassName("title").innerHTML += txt.charAt(i);
            i++;
            setTimeout(this.typeWriter, speed);
            // requestAnimationFrame(this.typeWriter)
        }
    }



    render() {
        return (
            <div>
                <p className='title'>World of Tanks Data Scout</p>
                {/* {this.typeWriter()} */}
            </div>
        );
    }
}


export default HomeScreen;
