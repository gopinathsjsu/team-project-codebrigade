import {FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE} from "./customerTypes";

const initialState = {
  isLoading: true,
  data: [],
  error: ""
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST: return {
      ...state,
      isLoading: true
    }
    case FETCH_CUSTOMERS_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: ""
    }
    case FETCH_CUSTOMERS_FAILURE: return {
      ...state,
      isLoading: false,
      data: [],
      error: action.payload
    }
    default: return state;
  }
};

export default  customerReducer;
