import { combineReducers } from 'redux';
import YelpRestaurantReducer from './YelpRestaurantReducer';
// import YelpRestaurant from '../actions/YelpRestaurant';

const rootReducer = combineReducers({
  restaurant: YelpRestaurantReducer,
});

export default rootReducer;
