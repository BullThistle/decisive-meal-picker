import axios from 'axios';

export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';
export const GET_RESTAURANT_FAILED = 'GET_RESTAURANT_FAILED';
const YELP_URL = 'http://localhost:5000/api/restaurant';

export function getRestaurantAsync() {
  const url = `${YELP_URL}?latitude=47.6338220&longitude=-122.3215450`;
  return axios.get(url).then(res => ({
    type: GET_RESTAURANT_SUCCESS, payload: res.data.restaurant,
  })).catch(err => ({
    type: GET_RESTAURANT_FAILED, payload: err,
  }));
}
