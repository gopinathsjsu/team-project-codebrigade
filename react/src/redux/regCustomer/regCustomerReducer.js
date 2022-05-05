import {POST_CUSTOMER_REQUEST, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_FAILURE} from "./regCustomerTypes";

const initialState = {
  isLoading: true,
  data: [],
  error: ""
};

const regCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CUSTOMER_REQUEST: return {
      ...state,
      isLoading: true
    }
    case POST_CUSTOMER_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: ""
    }
    case POST_CUSTOMER_FAILURE: return {
      ...state,
      isLoading: false,
      data: [],
      error: action.payload
    }
    default: return state;
  }
};

export default regCustomerReducer;
