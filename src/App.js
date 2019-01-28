import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Map from './components/Map';
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  state = {
    allVenues: [],
    venues: [],
    markers: []
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
      near: 'Waterbury,CT',
      limit: 10
    };

    axios
      .get(endpoint + new URLSearchParams(param))
      .then(res => {
        this.setState(
          {
            allVenues: res.data.response.groups[0].items,
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
      zoom: 13,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'styles'] // The MapTypeId to add to the map type control.
      }
    }); // The higher the zoom number, the more detailed the map.
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styles', styles);

    // Create infowindow
    let infowindow = new window.google.maps.InfoWindow({});

    // Iteration to display markers
    this.state.venues.forEach(thisVenue => {
      let venueInfo = `<div className="info"><h4>${thisVenue.venue.name}</h4>
        <p>${thisVenue.venue.location.formattedAddress}</p>
        <p>${thisVenue.venue.categories[0].name}</p></div>`;
      // Create marker
      let marker = new window.google.maps.Marker({
        position: {
          lat: thisVenue.venue.location.lat,
          lng: thisVenue.venue.location.lng
        },
        map: map,
        title: thisVenue.venue.name,
        id: thisVenue.venue.id,
        animation: window.google.maps.Animation.DROP
      });

      // Add marker to the markers array
      this.state.markers.push(marker);

      // Click marker, set content and open infowindow
      marker.addListener('click', () => {
        infowindow.setContent(venueInfo);
        infowindow.open(map, marker);

        // Marker animation
        marker.getAnimation() !== null
          ? marker.setAnimation(null)
          : marker.setAnimation(window.google.maps.Animation.BOUNCE);
      });
    });
  };

  updateVenues = newVenues => {
    this.setState({ venues: newVenues });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Search
            updateVenues={this.updateVenues}
            venues={this.state.allVenues}
            markers={this.state.markers}
          />
          <Map />
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
