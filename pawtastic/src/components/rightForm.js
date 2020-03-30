import React, { Component } from 'react';
import '../App.css';


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
                        <input className="textInput" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>

                    <label className="breedInputBox">
                        Breed<br />
                        <input className="textInput" type="text" value={this.state.breed} onChange={this.handleChange} />
                    </label>

                    <label className="birthdayInputBox">
                        Birthday<br />
                        <input className="textInput" type="text" value={this.state.birthday} onChange={this.handleChange} />
                    </label>

                    <label className="genderSelectionBox">Gender
                    <br />
                    <input className="binarySelection" type="button" name="gender" value={this.state.gender} onChange={this.handleChange} />
                    <input className="binarySelection" type="button" name="gender" value={this.state.gender} onChange={this.handleChange} />
                    </label>

                    <label className="spayedSelectionBox">
                        Spayed or Neutered<br />
                        <input className="binarySelection" type="button" value={this.state.spayed} onChange={this.handleChange} />
                        <input className="binarySelection" type="button" value={this.state.spayed} onChange={this.handleChange} />
                    </label>

                    <label className="weightSelectionBox">
                        Spayed or Neutered<br />
                        <input className="quadSelection" type="text" value={this.state.weight} onChange={this.handleChange} />
                        <input className="quadSelection" type="text" value={this.state.weight} onChange={this.handleChange} />
                        <input className="quadSelection" type="text" value={this.state.weight} onChange={this.handleChange} />
                        <input className="quadSelection" type="text" value={this.state.weight} onChange={this.handleChange} />
                    </label>

                    <button className="backButton">Back</button>
                </div>
            
            </form>
        )
    }

}