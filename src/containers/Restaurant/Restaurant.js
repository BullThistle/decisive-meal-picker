import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import * as actions from '../../actions';
// import { GoogleMap } from 'components';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'La Carta de Oaxaca',
      address: '5431 Ballard Ave NW, Seattle, WA 98107',
      phone: '+1 206-782-8722',
      website: 'http://www.lacartadeoaxaca.com/',
      rating: 4,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.getRestaurantAsync();
  }

  render() {
    return (
      <Container>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              {/* <GoogleMap /> */}
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

Restaurant.propTypes = {
  getRestaurantAsync: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: 'test',
  };
};

export default connect(mapStateToProps, actions)(Restaurant);

