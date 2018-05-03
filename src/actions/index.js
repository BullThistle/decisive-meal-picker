import axios from 'axios';

const YELP_URL = 'http://localhost:5000/api/restaurant';
export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';

export function getRestaurantAsync() {
  const url = `${YELP_URL}?latitude=47.6338220&longitude=-122.3215450`;
  return {
    type: GET_RESTAURANT_SUCCESS,
    payload: new Promise((resolve) => {
      axios.get(url).then((res) => {
        resolve(res.data.restaurant);
        console.log(res.data.restaurant);
      });
    }),
  };
}
