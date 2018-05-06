/* eslint-disable no-alert */
/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
const geolocation = (state, action) => {
  switch (action.type) {
    case 'GET_POSITION_SUCCESS':
      return action.payload;
    case 'GET_POSITION_FAILED':
      return { latitude: 0, longitude: 0 };
    default:
      return action;
  }
};

export default geolocation;
