import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Counter from './state/Counter';
import TheDate from './state/TheDate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouletteGun bulletInChamber={1} />        
      </div>
    );
  }
}

export default App;