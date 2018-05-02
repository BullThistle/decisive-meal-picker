import axios from 'axios';

const YELP_URL = 'http://localhost:5000/api/restaurant';

export const GET_RESTAURANT_REQUEST = 'GET_RESTAURANT_REQUEST';
export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';
export const GET_RESTAURANT_FAILED = 'GET_RESTAURANT_FAILED';

function getRestaurantAsync(people) {
  return {
    type: GET_RESTAURANT_SUCCESS,
    payload: people,
  };
}

export function fetchRestaurant() {
  return (dispatch) => {
    dispatch({ type: GET_RESTAURANT_REQUEST });
    const url = `${YELP_URL}?latitude=47.6338220&longitude=-122.3215450`;
    axios.get(url)
      .then((res) => {
        console.log(res);
        // const people = res.data.map((person) => {
        //   person.note = 'none';
        //   return person;
        // });
        dispatch(getRestaurantAsync(res));
      });
  };
}
