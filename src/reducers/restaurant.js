/* eslint-disable no-alert */
/* eslint-disable no-case-declarations */
const restaurant = (state, action) => {
  switch (action.type) {
    case 'GET_RESTAURANT_SUCCESS':
      const data = action.payload.then(res => res);
      return data;
    case 'GET_RESTAURANT_FAILED':
      return action;
    default:
      return action;
  }
};

export default restaurant;
