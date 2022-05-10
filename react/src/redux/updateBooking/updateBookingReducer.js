import {UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS, UPDATE_BOOKING_FAILURE} from "./updateBookingTypes";

const initialState = {
  isLoading: true,
  data: [],
  error: ""
};

const updateBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKING_REQUEST: return {
      ...state,
      isLoading: true
    }
    case UPDATE_BOOKING_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: ""
    }
    case UPDATE_BOOKING_FAILURE: return {
      ...state,
      isLoading: false,
      data: [],
      error: action.payload
    }
    default: return state;
  }
};

export default updateBookingReducer;
