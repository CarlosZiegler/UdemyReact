import React, { Component } from 'react';

import './App.css';
import Person from './Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , I am a React app</h1>
        <Person name='Carlos'/>
        <Person name='Lucas'/>
        <Person name='Johann'/>
      </div>
    );
  }
}

export default App;
