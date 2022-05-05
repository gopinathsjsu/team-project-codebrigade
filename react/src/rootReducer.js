import { combineReducers } from 'redux';
import regCustomerReducer from './redux/regCustomer/regCustomerReducer';
import searchReducer from './redux/searchHotels/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer, 
  regCustomer: regCustomerReducer
});

export default rootReducer;
