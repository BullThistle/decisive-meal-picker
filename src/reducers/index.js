import { combineReducers } from 'redux';
import yelp from './yelp';
import geolocation from './geolocation';

const rootReducer = combineReducers({
  restaurant: yelp,
  location: geolocation,
});

export default rootReducer;
