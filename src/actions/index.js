const YELP_URL = 'http://localhost:5000/api/restaurant';

export const GET_RESTAURANT_REQUEST = 'GET_RESTAURANT_REQUEST';
export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';
export const GET_RESTAURANT_FAILED = 'GET_RESTAURANT_FAILED';

export async function fetchRestaurant(dispatch) {
  try {
    dispatch({ type: GET_RESTAURANT_REQUEST });

    const url = `${YELP_URL}?latitude=47.6338220&longitude=-122.3215450`;
    const response = await fetch(url);

    dispatch({
      type: GET_RESTAURANT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({ type: GET_RESTAURANT_FAILED, payload: error });
  }
}
