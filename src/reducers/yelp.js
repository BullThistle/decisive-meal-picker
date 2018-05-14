/* eslint-disable no-alert */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
/* eslint-disable */

const yelp = (state, action) => {
  switch (action.type) {
    case 'GET_RESTAURANT_SUCCESS':
      const { name, rating, display_phone, location } = action.payload;

      const { latitude, longitude } = action.payload.coordinates;
      const restaurantLat = latitude;
      const restaurantLng = longitude;

      const address = location.display_address.join(' ');
      const phone = display_phone;
      console.log('NAME', name);
      console.log('LAT', restaurantLat);

      return {
        name,
        rating,
        phone,
        address,
        restaurantLat,
        restaurantLng
      };

    case 'GET_RESTAURANT_FAILED':
      return { status: 'ERROR', message: action.payload.message };
    default:
      return action;
  }
};

export default yelp;
