import React, { Component } from 'react';
import '../App.css';

import dogImg from '../assets/dogImg.png';
import logoImg from '../assets/logomark.png';
import verticalBubbleBarImg from '../assets/vertialBubbleBar.png';
import concentricGroupImg from '../assets/concentricGroup.png';


export default class LeftNav extends Component {
    constructor(props) {
      super(props);
        this.state={navPosition: 1}; 

    }

    handleMouseOver(e) {
        //Show CCx (ConcentricGroup circles) and change menu item font to whit
        //Restore when mouse over other menu items

        e.target.style.color="white";

        switch (e.target.id) {
            case "menuItem0": 
                document.getElementById("menuItem1").style.color="#9597A6";
                document.getElementById("menuItem2").style.color="#9597A6";
                document.getElementById("menuItem3").style.color="#9597A6";
                
                document.getElementById("CC0").style.zIndex=10;
                document.getElementById("CC1").style.zIndex=-1;
                document.getElementById("CC2").style.zIndex=-1;
                document.getElementById("CC3").style.zIndex=-1;
                break;
            case "menuItem1": 
                document.getElementById("menuItem0").style.color="#9597A6";
                document.getElementById("menuItem2").style.color="#9597A6";
                document.getElementById("menuItem3").style.color="#9597A6";
                
                document.getElementById("CC0").style.zIndex=-1;
                document.getElementById("CC1").style.zIndex=10;
                document.getElementById("CC2").style.zIndex=-1;
                document.getElementById("CC3").style.zIndex=-1;
                break;
            case "menuItem2": 
                document.getElementById("menuItem0").style.color="#9597A6";
                document.getElementById("menuItem1").style.color="#9597A6";
                document.getElementById("menuItem3").style.color="#9597A6";
                
                document.getElementById("CC0").style.zIndex=-1;
                document.getElementById("CC1").style.zIndex=-1;
                document.getElementById("CC2").style.zIndex=10;
                document.getElementById("CC3").style.zIndex=-1;
                break;
            case "menuItem3": 
                document.getElementById("menuItem0").style.color="#9597A6";
                document.getElementById("menuItem1").style.color="#9597A6";
                document.getElementById("menuItem2").style.color="#9597A6";
                
                document.getElementById("CC0").style.zIndex=-1;
                document.getElementById("CC1").style.zIndex=-1;
                document.getElementById("CC2").style.zIndex=-1;
                document.getElementById("CC3").style.zIndex=10;
                break;
        }
    }

    render() {
        return (
            <div className="LefNavContainer">
                <div className="dogImgBox">
                    <img className="dogImg" src={dogImg} />
                    <div className="logoBox">
                        <img className="logoImg" src={logoImg} />
                        <p className="logoTxt">PAWTASTIC</p>
                    </div>
                    <div className="navBarBox">
                        <img className="verticalBubbleBar" src={verticalBubbleBarImg} />
                        <div className="concentricGroupBox">
                            <img className="concentricGroup" id="CC0" src={concentricGroupImg} />
                            <img className="concentricGroup" id="CC1" src={concentricGroupImg} />
                            <img className="concentricGroup" id="CC2" src={concentricGroupImg} />
                            <img className="concentricGroup" id="CC3" src={concentricGroupImg} />
                        </div>
                        <div className="navBar">
                            <a className="menuItems" id="menuItem0" href="#" onMouseEnter={this.handleMouseOver} >Human profile</a>
                            <a className="menuItems" id="menuItem1" href="#" onMouseEnter={this.handleMouseOver} >Pet basics</a>
                            <a className="menuItems" id="menuItem2" href="#" onMouseEnter={this.handleMouseOver} >Pet details</a>
                            <a className="menuItems" id="menuItem3" href="#" onMouseEnter={this.handleMouseOver} >Confirm</a>
                        </div>
                    </div>
                    <a className="exitLink" href="#" >Save and exit</a>
                </div>
            </div>
        )
    }
}