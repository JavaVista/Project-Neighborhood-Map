import React, { Component } from 'react';
import logo from '../Map-icon.png';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="nav-toggle fas fa-bars" onClick={() => this.props.toggleMenu()} />
          <h2>Waterbury the Brass City Coffee Venues</h2>
        </header>
      </div>
    );
  }
}
