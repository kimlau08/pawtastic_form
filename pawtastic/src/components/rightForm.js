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
    handleGenderClick(event) {
        this.setState({gender: event.target.value});
    }
    handleSpayedClick(event) {
        this.setState({spayed: event.target.value});
    }
    handleWeightOptionClick(event) {
        this.setState({weight: event.target.value});
    }



    render() {
        return (
            <form className="RightFormContainer">
                <h2 className="petBasicsTitle">Yay, we love dogs! Give us the basics about your pup.</h2><br /><br />

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
                        <input className="textInput" type="date" value={this.state.birthday} placeholder="MM/DD/YYYY" onChange={this.handleBDateChange} />
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
                            <input className="binarySelection" type="button" value="Yes" onChange={this.handleChange} />
                            <input className="binarySelection" type="button" value="No" onChange={this.handleChange} />
                        </div>
                    </label>

                    <label className="weightSelectionBox">
                        Weight<br />
                        <div className="weightButtonGroup">
                            <input className="quadSelection" type="button" value="Option 1" onChange={this.handleChange} />
                            <input className="quadSelection" type="button" value="Option 2" onChange={this.handleChange} />
                            <input className="quadSelection" type="button" value="Option 3" onChange={this.handleChange} />
                            <input className="quadSelection" type="button" value="Option 4" onChange={this.handleChange} />
                        </div>
                    </label>

                    <button className="backButton">Back</button>
                </div>
            
            </form>
        )
    }

}