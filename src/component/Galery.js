import React, { Component } from 'react';
import style from './style.css';


class Galery extends Component {
    render() {
      return (
        <div>
            <h2 style={{textAlign:"center"}}>GALLERY</h2>
            <div className="container" id="galery">
                <div id="box1"></div>
                <div id="box2"></div>
                <div id="box3"></div>
                <div id="box4"></div>
                <div id="box5"></div>    
                <div id="box6"></div>
                <div id="box7"></div>
                <div id="box8"></div>
            </div>
        </div>
      )
    }
}
export default Galery;