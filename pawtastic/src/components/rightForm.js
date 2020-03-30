import React, { Component } from 'react';
import '../App.css';

import cameraCircleImg from '../assets/cameraCircle.png'


export default class RightForm extends Component {
    constructor(props) {
        super(props);
 
        this.state={name: "", breed: "", birthday: "", gender: "Female", 
                    spayed: "Yes", weight: "Option1"}
    }


    handleChange(event) {
        this.setState({value: event.target.value}); //update the value state when the form is submitted
    }


    render() {
        return (
            <form className="RightFormContainer">
                <h2 className="petBasicsTitle">Yay, we love dogs! Give us the basics about your pup.</h2><br /><br />

                <div className="inputContainer">
                    <label className="nameInputBox">
                        Name<br />
                        <input className="textInput" type="text" value={this.state.name} placeholder="Pet’s name" onChange={this.handleChange} />
                    </label>
                    <div className="uploadPhotoBox">
                       <img className="cameraImg" src={cameraCircleImg} />
                       <p className="uploadLabel">Upload a photo</p>
                    </div>
                    <label className="breedInputBox">
                        Breed<br />
                        <input className="textInput" type="text" value={this.state.breed} placeholder="Pet’s breed" onChange={this.handleChange} />
                    </label>

                    <label className="birthdayInputBox">
                        Birthday<br />
                        <input className="textInput" type="text" value={this.state.birthday} placeholder="MM/DD/YYYY" onChange={this.handleChange} />
                    </label>

                    <label className="genderSelectionBox">
                        Gender<br />
                        <div className="genderButtonGroup">
                            <input className="binarySelection" type="button" name="gender" value="Female" onChange={this.handleChange} />
                            <input className="binarySelection" type="button" name="gender" value="Male" onChange={this.handleChange} />
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