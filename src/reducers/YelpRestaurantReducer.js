import { GET_RESTAURANT_SUCCESS, GET_RESTAURANT_REQUEST } from '../actions/YelpRestaurant';

// export const GET_RESTAURANT_REQUEST = 'GET_RESTAURANT_REQUEST';
// export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';
// export const GET_RESTAURANT_FAILED = 'GET_RESTAURANT_FAILED';
// import { GET_RESTAURANT_SUCCESS, GET_RESTAURANT_REQUEST } from '../actions/YelpRestaurant';

export default function (state = [], action) {
  console.log(action);
  switch (action.type) {
    case GET_RESTAURANT_REQUEST:
      return action;
    case GET_RESTAURANT_SUCCESS:
      return [action.data, ...state];
    default:
      return [action, ...state];
  }
}
