import React, { Component } from 'react';
import logo from './Map-icon.png';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    venues: []
  };

  componentDidMount() {
    this.getVenues();
  }

  renderMap = () => {
    loadMapScript(
      'https://maps.googleapis.com/maps/api/js?libraries=places,drawing,geometry&key=AIzaSyBKHkb-mBawoVs_ygUqq4XrWF_nCIwGWkM&v=3&callback=initMap'
    );
    window.initMap = this.initMap;
  };

  getVenues = () => {
    const endpoint = 'https://api.foursquare.com/v2/venues/explore?';
    const param = {
      client_id: 'EKWEPS4YTXRYSTDAWXSOP35QYXXTE0ZQ0KKZPGDII12QBBV5',
      client_secret: 'Q1DMU1ZCMS0ZKUFDLG4GV1XOX2J1M4I12ZWY0AOBHPXGQ3KK',
      v: '20190301',
      query: 'coffee',
      near: 'Waterbury,CT'
    };

    axios
      .get(endpoint + new URLSearchParams(param))
      .then(res => {
        this.setState(
          {
            venues: res.data.response.groups[0].items
          },
          this.renderMap()
        );
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  };

  initMap = () => {
    let styles = new window.google.maps.StyledMapType(
      [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            {
              color: '#ff7000'
            },
            {
              lightness: '69'
            },
            {
              saturation: '100'
            },
            {
              weight: '1.17'
            },
            {
              gamma: '2.04'
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'geometry',
          stylers: [
            {
              color: '#cb8536'
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels',
          stylers: [
            {
              color: '#ffb471'
            },
            {
              lightness: '66'
            },
            {
              saturation: '100'
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              gamma: 0.01
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              saturation: -31
            },
            {
              lightness: -33
            },
            {
              weight: 2
            },
            {
              gamma: 0.8
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [
            {
              lightness: '-8'
            },
            {
              gamma: '0.98'
            },
            {
              weight: '2.45'
            },
            {
              saturation: '26'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              lightness: 30
            },
            {
              saturation: 30
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              saturation: 20
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              lightness: 20
            },
            {
              saturation: -20
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              lightness: 10
            },
            {
              saturation: -30
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [
            {
              saturation: 25
            },
            {
              lightness: 25
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              lightness: -20
            },
            {
              color: '#ecc080'
            }
          ]
        }
      ],
      { name: 'Brass City' }
    );

    // Constructor creates a new map - only center and zoom are required.
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.5538091, lng: -73.0438362 },
      zoom: 15,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'styles'] // The MapTypeId to add to the map type control.
      }
    }); // The higher the zoom number, the more detailed the map.
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styles', styles);

    this.state.venues.map(thisVenue => {
      let marker = new window.google.maps.Marker({
        position: {
          lat: thisVenue.venue.location.lat,
          lng: thisVenue.venue.location.lng
        },
        map: map,
        title: thisVenue.venue.name
      });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Waterbury the Brass City Venues</h2>
        </header>
        <main>
          <div id="map" />
        </main>
      </div>
    );
  }
}

/*
    <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places,drawing,geometry&key=AIzaSyCabLYatqt2ceh4IV18VX_gyNdi68n3nRg&v=3&callback=initMap"></script>
*/

const loadMapScript = url => {
  const scriptIndex = window.document.getElementsByTagName('script')[0];
  let scriptTag = window.document.createElement('script');
  scriptTag.async = true;
  scriptTag.defer = true;
  scriptTag.src = url;
  scriptIndex.parentNode.insertBefore(scriptTag, scriptIndex);
};

export default App;
