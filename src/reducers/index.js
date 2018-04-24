import { combineReducers } from 'redux';
import YelpRestaurantReducer from './YelpRestaurantReducer';
import { fetchRestaurant } from '../actions';

const rootReducer = combineReducers({
  YelpRestaurant: YelpRestaurantReducer([], fetchRestaurant()),
});

export default rootReducer;
