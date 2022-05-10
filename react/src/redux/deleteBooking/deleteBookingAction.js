import axios from "axios";
import {DELETE_BOOKING_REQUEST, DELETE_BOOKING_SUCCESS, DELETE_BOOKING_FAILURE} from "./deleteBookingTypes";

export const deleteBookingRequest = () => {
  return {
    type: DELETE_BOOKING_REQUEST,
  }
};

export const deleteBookingSuccess = (data) => {
  return {
    type: DELETE_BOOKING_SUCCESS,
    payload: data
  }
};

export const deleteBookingFailure = (error) => {
  return {
    type: DELETE_BOOKING_FAILURE,
    payload: error
  }
};

export const deleteBooking = (bookingState) => {
  return (dispatch) => {
    dispatch(deleteBookingRequest);
    //TODO: change this sample url with hotel url path while integration
    axios.delete("http://localhost:8080/booking" , { params: { 
      email: bookingState.email,
      roomid: bookingState.roomid,
      checkin: bookingState.checkin, 
      checkout: bookingState.checkout
    } })
    .then( () => {
      dispatch(deleteBookingSuccess(bookingState));
    })
    .catch((error) => {
      dispatch(deleteBookingFailure(error.message));
    });
  }
}
