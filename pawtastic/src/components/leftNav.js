import React, { Component } from 'react';
import '../App.css';

import dogImg from '../assets/dogImg.png';
import logoImg from '../assets/logomark.png';
import verticalBubbleBarImg from '../assets/vertialBubbleBar.png';
import concentricGroupImg from '../assets/concentricGroup.png';


export default class LeftNav extends Component {
    constructor(props) {
      super(props);
      this.state={menuSelection: ""};

      this.handleMouseOver=this.handleMouseOver.bind(this);
      this.updatefontColor=this.updatefontColor.bind(this);
      this.updateZindex=this.updateZindex.bind(this);
      this.changeSiblingStyling=this.changeSiblingStyling.bind(this);
    }


    updatefontColor=(node, fontColor)=>{  //updater function for font color
        node.style.color=fontColor;
    }
    updateZindex=(node, zIdx)=>{    //updater function for z index
        node.style.zIndex=zIdx;
    }
    changeSiblingStyling(node, styleUpdater, styleAttr) { //update whatever styling needed by the caller

        let sibling=node.parentNode.firstChild;
        while (sibling) {
            if (sibling==node) { //It's itself, not sibling
                sibling=sibling.nextElementSibling;
                continue;  
            }

            styleUpdater(sibling, styleAttr); //update whatever styling needed by the caller

            sibling=sibling.nextElementSibling;
        }
    }

    handleMouseOver(e) {
        //Show CCx (ConcentricGroup circles) and change menu item font to whit
        //Restore when mouse over other menu items

        //update menu state
        this.setState({menuSelection:  e.target.id});

        //toggle nav bar font color
        e.target.style.color="white";
        this.changeSiblingStyling(e.target, this.updatefontColor, '#9597A6')
        
        //toggle nav bar bubbles
        let ccNode;
        switch (e.target.id) {
            case "menuItem0": 

                ccNode=document.getElementById("CC0");
                ccNode.style.zIndex=10;
                this.changeSiblingStyling(ccNode, this.updateZindex, -1)

                break;
            case "menuItem1": 

                ccNode=document.getElementById("CC1");
                ccNode.style.zIndex=10;
                this.changeSiblingStyling(ccNode, this.updateZindex, -1)

                break;
            case "menuItem2": 

                ccNode=document.getElementById("CC2");
                ccNode.style.zIndex=10;
                this.changeSiblingStyling(ccNode, this.updateZindex, -1);

                break;
            case "menuItem3": 
            
                ccNode=document.getElementById("CC3");
                ccNode.style.zIndex=10;
                this.changeSiblingStyling(ccNode, this.updateZindex, -1);
            
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