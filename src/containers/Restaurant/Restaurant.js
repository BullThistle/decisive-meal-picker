import React, { Component } from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import { GoogleMap } from 'components';

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'La Carta de Oaxaca',
      address: '5431 Ballard Ave NW, Seattle, WA 98107',
      phone: '+1 206-782-8722',
      website: 'http://www.lacartadeoaxaca.com/',
      rating: 4,
      lat: 0,
      lng: 0,
    };
  }

  // componentDidMount() {
  //   this.getPosition();
  // }

  // componentDidUpdate() {
  //   this.getPosition();
  // }

  geolocation() {
    // const self = this;

    'use strict';

    return new Promise((resolve, reject) => {
      const coordinates = {
        latitude: null,
        longitude: null,
        error: false,
        testData: 'Hello, world!',
      };
      function success(pos) {
        coordinates.latitude = pos.coords.latitude;
        coordinates.longitude = pos.coords.longitude;
        coordinates.testData = 'I am John';
        resolve(coordinates);
      }

      function fail(error) {
        coordinates.error = true;
        resolve(coordinates); // or reject(error);
      }
      navigator.geolocation.getCurrentPosition(success, fail);
    });
  }

  // getPosition() {
  //   'use strict';

  //   return new Promise((resolve, reject) => {
  //     const coordinates = {
  //       latitude: null,
  //       longitude: null,
  //       error: false,
  //       testData: 'Hello, world!',
  //     };
  //     function success(pos) {
  //       coordinates.latitude = pos.coords.latitude;
  //       coordinates.longitude = pos.coords.longitude;
  //       coordinates.testData = 'I am John';
  //       resolve(coordinates);
  //     }

  //     function fail(error) {
  //       coordinates.error = true;
  //       resolve(coordinates); // or reject(error);
  //     }
  //     navigator.geolocation.getCurrentPosition(success, fail);
  //   });
  // }

  // success(position) {
  //   const lat = position.coords.latitude;
  //   const lng = position.coords.longitude;
  //   resolve();
  // }

  // fail() {
  //   console.log('failed');
  // }

  // geolocation() {
  //   // const self = this;
  //   if (navigator.geolocation) {
  //     console.log('made it in the function');
  //     navigator.geolocation.getCurrentPosition(
  //       this.success.bind(this), // eslint-disable-line no-use-before-define
  //       this.fail, // eslint-disable-line no-use-before-define
  //     ); /* eslint-disable max-len */
  //   } else {
  //     alert('Browser not supported');
  //   }
  // }

  render() {
    return (
      <Container>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              <GoogleMap lat={this.state.lat} lng={this.state.lng} />
            </Grid.Column>
            <Grid.Column textAlign="left">
              <Header style={{ marginBottom: '10px' }}>
                {this.state.name}
              </Header>
              <ReactStars
                count={5}
                size={14}
                value={this.state.rating}
                color2="#ffd700"
                edit={false}
              />
              <p style={{ marginTop: '10px' }}>{this.state.address}</p>
              <p>{this.state.phone}</p>
              <a href={this.state.website}>{this.state.website}</a>
              <p style={{ marginTop: '10px' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                aut dolore quam maxime nulla eum ullam enim voluptas dolorum
                eius! Similique ea voluptate reiciendis quibusdam itaque.
                Perferendis fugiat temporibus unde.
              </p>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Restaurant;
