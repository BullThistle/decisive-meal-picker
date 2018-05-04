/* eslint-disable no-alert */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
const yelp = (state, action) => {
  switch (action.type) {
    case 'GET_RESTAURANT_SUCCESS':
      const {
        name, rating, display_phone, location,
      } = action.payload;

      const address = location.display_address.join(' ');
      const phone = display_phone;

      return {
        name, rating, phone, address,
      };
    case 'GET_RESTAURANT_FAILED':
      return action;
    default:
      return action;
  }
};

export default yelp;
