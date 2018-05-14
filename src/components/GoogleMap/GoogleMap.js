import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const GoogleMap = props => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
    defaultCenter={[props.lat, props.lon]}
    defaultZoom={11}
  />
);

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};

export default GoogleMap;
