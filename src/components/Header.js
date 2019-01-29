import React, { Component } from 'react';
import logo from '../Map-icon.png';

export default class Header extends Component {

  toggleNav = () => {
    document.querySelector('.search').addEventListener('click', function () {
      console.log('why')
      this.classList.toggle("toggle");
    });
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="nav-toggle fas fa-bars" onClick={this.toggleNav} />
        <h2>Waterbury the Brass City Coffee Venues</h2>
      </header>
    );
  }
}
