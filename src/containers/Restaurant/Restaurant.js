import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'La Carta de Oaxaca',
      address: 'La Carta de Oaxaca',
      phone: '+1 206-782-8722',
      website: 'http://www.lacartadeoaxaca.com/',
      rating: 4,
    };
  }
  render() {
    return (
      <Container>
        <Header>{this.state.name}</Header>
        <p>{this.state.address}</p>
        <p>{this.state.phone}</p>
        <p>{this.state.website}</p>
        <p>{this.state.rating}</p>
      </Container>
    );
  }
}

export default Restaurant;
