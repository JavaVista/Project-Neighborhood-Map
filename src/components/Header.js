import React, { Component } from 'react';
import logo from '../Map-icon.png';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Waterbury the Brass City Coffee Venues</h2>
      </header>
    );
  }
}
