import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <aside className="search">
        <div className="search-form">
          <span class="text">Search for Coffee Nearby</span>
          <input id="places-search" type="text" placeholder="e.g. Starbucks" />
          <input id="go-places" type="button" value="Go" />
        </div>
      </aside>
    );
  }
}
