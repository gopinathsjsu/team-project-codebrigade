import {DELETE_BOOKING_REQUEST, DELETE_BOOKING_SUCCESS, DELETE_BOOKING_FAILURE} from "./deleteBookingTypes";

const initialState = {
  isLoading: true,
  data: [],
  error: ""
};

const deleteBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOKING_REQUEST: return {
      ...state,
      isLoading: true
    }
    case DELETE_BOOKING_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: ""
    }
    case DELETE_BOOKING_FAILURE: return {
      ...state,
      isLoading: false,
      data: [],
      error: action.payload
    }
    default: return state;
  }
};

export default deleteBookingReducer;
