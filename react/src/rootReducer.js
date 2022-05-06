import { combineReducers } from 'redux';
import regCustomerReducer from './redux/regCustomer/regCustomerReducer';
import searchReducer from './redux/searchHotels/searchReducer';
import bookingStateReducer from "./redux/bookingState/bookingStateReducer";

const rootReducer = combineReducers({
  search: searchReducer, 
  regCustomer: regCustomerReducer,
  bookingState: bookingStateReducer
});

export default rootReducer;
