import React, { Component } from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import { GoogleMap } from 'components';

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
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              <GoogleMap />
            </Grid.Column>
            <Grid.Column textAlign="left">
              <Header>{this.state.name}</Header>
              <p>{this.state.address}</p>
              <p>{this.state.phone}</p>
              <p>{this.state.website}</p>
              <p>{this.state.rating}</p>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Restaurant;
