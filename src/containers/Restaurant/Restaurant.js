/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import * as actions from '../../actions';
// import { GoogleMap } from 'components';

class Restaurant extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.getRestaurantAsync();
  }

  render() {
    const {
      name, rating, address, phone,
    } = this.props.restaurantInfo;
    return (
      <Container>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              {/* <GoogleMap /> */}
            </Grid.Column>
            <Grid.Column textAlign="left">
              <Header style={{ marginBottom: '10px' }}>
                {name}
              </Header>
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
  getRestaurantAsync: PropTypes.func.isRequired,
  restaurantInfo: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  restaurantInfo: state.restaurant,
});

export default connect(mapStateToProps, actions)(Restaurant);

