import axios from 'axios';

export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';
export const GET_RESTAURANT_FAILED = 'GET_RESTAURANT_FAILED';
export const GET_POSITION_SUCCESS = 'GET_POSITION_SUCCESS';
export const GET_POSITION_FAILED = 'GET_POSITION_FAILED';

const YELP_URL = 'http://localhost:5000/api/restaurant';

export function getGeoLocationAsync() {
  if (navigator.geolocation) {
    const getPosition = options => new Promise(((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    }));

    return getPosition()
      .then(position => ({
        type: GET_POSITION_SUCCESS, payload: position.coords,
      }))
      .catch(err => ({
        type: GET_POSITION_FAILED, payload: err,
      }));
  }
  return { type: GET_POSITION_FAILED, payload: 'Geolocation is not supported in your browser' };
}

export function getRestaurantAsync(latitude, longitude) {
  console.log(latitude);
  const url = `${YELP_URL}?latitude=${latitude}&longitude=${longitude}`;
  return axios.get(url).then(res => ({
    type: GET_RESTAURANT_SUCCESS, payload: res.data.restaurant,
  })).catch(err => ({
    type: GET_RESTAURANT_FAILED, payload: err,
  }));
}

