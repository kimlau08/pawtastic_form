import React, { Component } from 'react';
import LeftNav from './components/leftNav';
import RightForm from './components/rightForm'
import './App.css';

export default class App extends Component {
   constructor(props) {
     super(props);

   }

   render() {
     return (
      <div className="App">
        <div className="container">
          <LeftNav />
          <RightForm />
        </div>
      </div>
     )
   }
}
