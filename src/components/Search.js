import React, { Component } from 'react';
import escapeRegex from 'escape-string-regexp';

export default class Search extends Component {
  state = {
    query: '',
    venues: this.props.venues
  };

  updateSearch = query => {
    this.setState({ query });
    let allVenues = this.props.venues;
    let newVenues;
    const match = new RegExp(escapeRegex(query), 'i');

    if (this.state.query && (this.state.query !== '')) {
      newVenues = allVenues.filter(locale => match.test(locale.venue.name));
      this.setState({ venues: newVenues });
      this.props.updateVenues(newVenues);
      console.log('old ', allVenues, 'new ', newVenues)
    } else {
      this.setState({ venues: allVenues });
    }
  };
  render() {
    return (
      <aside className="search">
        <div className="search-form">
          <h3 className="text">Search for Coffee Nearby</h3>
          <input
            id="places-search"
            type="text"
            placeholder="e.g. Starbucks"
            onChange={e => this.updateSearch(e.target.value)}
            value={this.state.query}
          />
        </div>
      </aside>
    );
  }
}
