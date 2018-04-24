const YELP_URL = 'localhost:5000/api/restaurant';

export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';

export function fetchRestaurant() {
  const url = `${YELP_URL}?latitude=47.6338220&longitude=-122.3215450`;
  const request = fetch({ method: 'GET', mode: 'cors' }, url).then(response => console.log(response));
  // console.log(request);
  return {
    type: FETCH_RESTAURANT,
    payload: request,
  };
}
