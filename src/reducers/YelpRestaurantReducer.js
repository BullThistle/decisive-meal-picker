
// export const GET_RESTAURANT_REQUEST = 'GET_RESTAURANT_REQUEST';
// export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS';
// export const GET_RESTAURANT_FAILED = 'GET_RESTAURANT_FAILED';
export default function (state = [], action) {
  switch (action.type) {
    case 'GET_RESTAURANT_REQUEST':
      return [action.data, ...state];
    default:
      return [action, ...state];
  }
}
