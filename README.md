# Neighborhood Map Project

Udacity Front-End Developer Nanodegree project. Developed a Single Page App using React.js library with Google Maps API, along  with Foursquare API. The goal of the project was to create a web application from scratch.

## Table of Contents

- [Neighborhood Map Project](#neighborhood-map-project)
  - [Table of Contents](#table-of-contents)
  - [Task](#task)
  - [App Functionality](#app-functionality)
    - [Demo](#demo)
  - [Technology](#technology)
    - [Dependencies](#dependencies)
    - [Server](#server)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [Contact / Social Media](#contact--social-media)
    - [License](#license)

## Task

I create a Single Page App that allows you to select a list of venues in a Google Map. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## App Functionality

The application shows you the locations of Coffee Shops around the City of Waterbury in CT. The map data is from Google Maps, along with location data from Foursquare.

Some of the features include:

- A large-screen map of the city
- Map markers identifying a number of Coffee Shops around town
- Clicking on a map marker will display the name and address of the venue
- A search box that will display a list view of the identified location
- Clicking on a name in the list, the marker will animate by bouncing on the map to show you the exact location
- It has a Google's Lighthouse Accessibility Rating of 91
- Primarily use for laptop or tablet, but it has been optimized for phone screens as well
- The ability to switch the theme color of the map to a customize color theme called "Brass City"

<!--
TODO:
### Demo

- [Neighborhood Map](https://javavista.github.io/Project-MyReads/#/)
-->

## Technology

- JavaScript
  - ES6
- Node.js
  - npm
- [axios](https://www.npmjs.com/package/axios)
- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
- [ReactJS](https://reactjs.org/)
- [Google Maps Api](https://cloud.google.com/maps-platform/)
- [FourSquare Api](https://developer.foursquare.com/)

### Dependencies

Install all project dependencies with `npm install`. You can also use `yarn install`. You will need [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) to control navigational routing. To install run `npm install --save react-router-dom`

### Server

Start the development server with `npm start`. You can also use `yarn start`.

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite  HTTP server so that a visitor to your site is served `index.html`.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Contact / Social Media

- Twitter – [@seetechnologic](https://twitter.com/seetechnologic)
- GitHub - [https://github.com/JavaVista/](https://github.com/JavaVista/)
- LinkedIn - [Javier Carrion](https://www.linkedin.com/in/technologic)

### License

Distributed under the MIT License. Note: Copyright and license text of third party modules are included in their source code.

See the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
for more information.