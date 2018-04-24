import { FETCH_RESTAURANT } from '../actions/index';

export default function (state = [], action) {
  console.log(action);
  switch (action) {
    case FETCH_RESTAURANT:
      return [action.data, ...state];
    default:
      return [action, ...state];
  }
}
