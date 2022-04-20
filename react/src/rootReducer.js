import { combineReducers } from 'redux';
import searchReducer from './redux/searchHotels/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer
});

export default rootReducer;
