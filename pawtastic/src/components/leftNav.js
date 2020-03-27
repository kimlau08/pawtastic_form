import React, { Component } from 'react';
import '../App.css';

import dogImg from '../assets/dogImg.png';


export default class LeftNav extends Component {
    constructor(props) {
      super(props);
        this.state={navPosition: 1}; 

    }

    render() {
        return (
            <div className="LefNavContainer">
                <img className="dogImgBox" src={dogImg} />
            </div>
        )
    }

}