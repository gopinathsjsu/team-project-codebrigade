import { UPDATE_BOOKING_STATE } from "./bookingStateTypes";

const initialState = {
  data: {}
};

const bookingStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKING_STATE: return {
      ...state,
      data: action.data
    }
    default: return state;
  }
}

export default bookingStateReducer;
