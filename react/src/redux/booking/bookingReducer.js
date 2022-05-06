import {POST_BOOKING_REQUEST, POST_BOOKING_SUCCESS, POST_BOOKING_FAILURE} from "./bookingTypes";

const initialState = {
  isLoading: true,
  data: [],
  error: ""
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BOOKING_REQUEST: return {
      ...state,
      isLoading: true
    }
    case POST_BOOKING_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: ""
    }
    case POST_BOOKING_FAILURE: return {
      ...state,
      isLoading: false,
      data: [],
      error: action.payload
    }
    default: return state;
  }
};

export default bookingReducer;
