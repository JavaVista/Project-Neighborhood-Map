import React, { Component } from 'react';
import logo from './Map-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
