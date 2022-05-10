import { combineReducers } from 'redux';
import regCustomerReducer from './redux/regCustomer/regCustomerReducer';
import searchReducer from './redux/searchHotels/searchReducer';
import bookingStateReducer from "./redux/bookingState/bookingStateReducer";
import bookingReducer from "./redux/booking/bookingReducer";
import rewardsReducer from "./redux/rewards/rewardsReducer";
import customerReducer from './redux/customer/customerReducer';

const rootReducer = combineReducers({
  search: searchReducer, 
  regCustomer: regCustomerReducer,
  bookingState: bookingStateReducer,
  booking: bookingReducer,
  rewards: rewardsReducer,
  customers:customerReducer
});

export default rootReducer;
