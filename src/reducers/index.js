import { combineReducers } from 'redux';
import yelp from './yelp';

const rootReducer = combineReducers({
  restaurant: yelp,
});

export default rootReducer;
