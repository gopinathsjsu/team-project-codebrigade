import { UPDATE_BOOKING_STATE } from "./bookingStateTypes";

const updateBookingState = (data) => {
  return {
    type:UPDATE_BOOKING_STATE,
    data: data
  }
};

export default updateBookingState;
