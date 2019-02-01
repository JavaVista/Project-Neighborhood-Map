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

    if (this.state.query && this.state.query !== '') {
      newVenues = allVenues.filter(locale => {
        return match.test(locale.venue.name);
      });
      this.setState({ venues: newVenues });
      this.props.updateVenues(newVenues);
    } else {
      this.setState({ venues: allVenues });
    }
  };

  clickMarker = (venueName, id) => {
    this.props.markers.forEach(marker => {
      if (marker.title === venueName && marker.id === id) {
        window.google.maps.event.trigger(marker, 'click');
      }
    });
  };

  render() {
    return (
      <aside className={"search " + 'search-' + this.props.showMenu}>
        <div className="search-form">
          <h3 className="text">
            Search for{' '}
            <span className="cup" role="img" aria-label="coffee cup">
              ☕
            </span>{' '}
            Cafe Nearby
          </h3>
          <input
            className="box"
            aria-label="Filter venue list"
            role="search"
            id="places-search"
            type="text"
            placeholder="e.g. Starbucks"
            onChange={e => this.updateSearch(e.target.value)}
            value={this.state.query}
          />
        </div>

        {this.state.venues.length !== 0 && (
          <ul className="search-result">
            {this.state.venues.map((locale, index, id) => {
              return (
                <li
                  key={index}
                  tabIndex={index}
                  className="item"
                  onClick={() =>
                    this.clickMarker(locale.venue.name, locale.venue.id)
                  }
                >
                  {locale.venue.name}
                </li>
              );
            })}
          </ul>
        )}
      </aside>
    );
  }
}
