/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import * as actions from '../../actions';
/* eslint-disable */
import GoogleMap from '../../components/GoogleMap/GoogleMap';

class Restaurant extends Component {
  componentDidMount() {
    this.fetchPosition();
  }

  componentDidUpdate() {
    if (this.props.latitude && this.props.longitude) {
      this.fetchData(this.props.latitude, this.props.longitude);
    }
    console.log('PROPSS', this.props);
  }

  fetchData(lat, long) {
    this.props.getRestaurantAsync(lat, long);
  }

  fetchPosition() {
    this.props.getGeoLocationAsync();
  }

  googleMap() {
    if (this.props.restaurantLat !== undefined) {
      return (
        <GoogleMap
          lon={this.props.restaurantLat}
          lat={this.props.restaurantLng}
        />
        // <p>map</p>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  render() {
    const { name, rating, address, phone } = this.props;
    return (
      <Container>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>{this.googleMap()}</Grid.Column>
            <Grid.Column textAlign="left">
              <Header style={{ marginBottom: '10px' }}>{name}</Header>
              <ReactStars
                count={5}
                size={14}
                value={rating}
                color2="#ffd700"
                edit={false}
              />
              <p style={{ marginTop: '10px' }}>{address}</p>
              <p>{phone}</p>
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

Restaurant.propTypes = {
  getGeoLocationAsync: PropTypes.func.isRequired,
  getRestaurantAsync: PropTypes.func.isRequired,
  name: PropTypes.string,
  rating: PropTypes.number,
  address: PropTypes.string,
  phone: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

Restaurant.defaultProps = {
  name: 'La Carta de Oaxaca',
  address: 'La Carta de Oaxaca',
  phone: '+1 206-782-8722',
  rating: 4,
  latitude: 0,
  longitude: 0
};

const mapStateToProps = state => ({
  name: state.restaurant.name,
  rating: state.restaurant.rating,
  address: state.restaurant.address,
  phone: state.restaurant.phone,
  restaurantLat: state.restaurant.restaurantLat,
  restaurantLng: state.restaurant.restaurantLng,
  latitude: state.location.latitude,
  longitude: state.location.longitude
});

export default connect(mapStateToProps, actions)(Restaurant);
