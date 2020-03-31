import React, { Component } from 'react';
import '../App.css';

import cameraCircleImg from '../assets/cameraCircle.png'


export default class RightForm extends Component {
    constructor(props) {
        super(props);
 
        this.state={name: "", imgFilePath: "", breed: "",  birthday: "", gender: "", 
                    spayed: "", weight: ""}

        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleImagePathChange=this.handleImagePathChange.bind(this);
        this.handleBreedChange=this.handleBreedChange.bind(this);
        this.handleBDateChange=this.handleBDateChange.bind(this);
        this.handleGenderClick=this.handleGenderClick.bind(this);
        this.handleSpayedClick=this.handleSpayedClick.bind(this);
        this.handleWeightOptionClick=this.handleWeightOptionClick.bind(this);
        this.switchToDatePicker=this.switchToDatePicker.bind(this);
        this.switchToTextType=this.switchToTextType.bind(this);
        this.handleBackButtonClick=this.handleBackButtonClick.bind(this);
    }


    handleNameChange(event) {
        this.setState({name: event.target.value}); //update the value state when the field is changed
    }
    handleImagePathChange(event) {
        this.setState({imgFilePath: event.target.value}); //update pathname after picking file
    }
    handleBreedChange(event) {
        this.setState({breed: event.target.value}); //update the value state when the form is submitted
    }

    handleBDateChange(event) {
        this.setState({birthday: event.target.value}); //update the value state when the form is submitted
    }

    changeSiblingButtonColor(node, buttonColor) {

        let sibling=node.parentNode.firstChild;
        while (sibling) {
            if (sibling==node) { //It's itself, not sibling
                sibling=sibling.nextElementSibling;
                continue;  
            }

            sibling.style.backgroundColor=buttonColor; //update color

            sibling=sibling.nextElementSibling;
        }
    }
    handleGenderClick(event) {
        this.setState({gender: event.target.value});
        event.target.style.backgroundColor='#EBD0CE';
        this.changeSiblingButtonColor(event.target, 'white');
    }
    handleSpayedClick(event) {
        this.setState({spayed: event.target.value});
        event.target.style.backgroundColor='#EBD0CE';
        this.changeSiblingButtonColor(event.target, 'white');
    }
    handleWeightOptionClick(event) {
        this.setState({weight: event.target.value});
        event.target.style.backgroundColor='#EBD0CE';
        this.changeSiblingButtonColor(event.target, 'white');
    }

    switchToDatePicker(event) {
        event.target.type="date";
    }
    switchToTextType(event) {
        event.target.type="text";
    }

    handleBackButtonClick(event) {
        alert(`\nData entered: \n  Name: ${this.state.name}, Breed: ${this.state.breed}, Birthday: ${this.state.birthday}, Gender: ${this.state.gender}, Spayed: ${this.state.spayed}, Weight: ${this.state.weight} `);
    }


    render() {
        return (
            <form className="RightFormContainer">
                <p className="petBasicsTitle">Yay, we love dogs! Give us the basics about your pup.</p><br />

                <div className="inputContainer">

                    <label className="nameInputBox">
                        Name<br />
                        <input className="textInput" type="text" value={this.state.name} placeholder="Pet’s name" onChange={this.handleNameChange} />
                    </label>

                    <div className="uploadPhotoBox">
                       <img className="cameraImg" src={cameraCircleImg} />
                        <label className="uploadLabel" for="filePickerInput">Upload a photo</label>
                        <input id="filePickerInput" type="file" value={this.state.imgFilePath}  onChange={this.handleImagePathChange} />
                    </div>

                    <label className="breedInputBox">
                        Breed<br />
                        <input className="textInput" type="text" value={this.state.breed} placeholder="Pet’s breed" onChange={this.handleBreedChange} />
                    </label>

                    <label className="birthdayInputBox">
                        Birthday<br />
                        <input className="textInput" type="text" value={this.state.birthday} placeholder="MM/DD/YYYY" onMouseEnter={this.switchToDatePicker} onMouseLeave={this.switchToTextType} onChange={this.handleBDateChange} />
                    </label>

                    <label className="genderSelectionBox">
                        Gender<br />
                        <div className="genderButtonGroup">
                            {/* Use input type=button instead of button tag to make color change stay after clicking */}
                            <input className="binarySelection" type="button" name="gender" value="Female" onClick={this.handleGenderClick} />
                            <input className="binarySelection" type="button" name="gender" value="Male" onClick={this.handleGenderClick} />
                        </div>
                    </label>

                    <label className="spayedSelectionBox">
                        Spayed or Neutered<br />
                        <div className="spayedYesNoGroup">
                            <input className="binarySelection" type="button" value="Yes" onClick={this.handleSpayedClick} />
                            <input className="binarySelection" type="button" value="No" onClick={this.handleSpayedClick} />
                        </div>
                    </label>

                    <label className="weightSelectionBox">
                        Weight<br />
                        <div className="weightButtonGroup">
                            <input className="quadSelection" type="button" value="Option 1" onClick={this.handleWeightOptionClick} />
                            <input className="quadSelection" type="button" value="Option 2" onClick={this.handleWeightOptionClick} />
                            <input className="quadSelection" type="button" value="Option 3" onClick={this.handleWeightOptionClick} />
                            <input className="quadSelection" type="button" value="Option 4" onClick={this.handleWeightOptionClick} />
                        </div>
                    </label>

                    <button className="backButton" onClick={this.handleBackButtonClick} >Back</button>
                </div>
            
            </form>
        )
    }

}