import axios from "axios";
import {POST_BOOKING_REQUEST, POST_BOOKING_SUCCESS, POST_BOOKING_FAILURE} from "./bookingTypes";

export const postBookingRequest = () => {
  return {
    type: POST_BOOKING_REQUEST,
  }
};

export const postBookingSuccess = (data) => {
  return {
    type: POST_BOOKING_SUCCESS,
    payload: data
  }
};

export const postBookingFailure = (error) => {
  return {
    type: POST_BOOKING_FAILURE,
    payload: error
  }
};

export const postBooking = (bookingState) => {
  return (dispatch) => {
    dispatch(postBookingRequest);
    const url = "http://localhost:8080/booking";
    //TODO: change this sample url with hotel url path while integration
    axios.post(url)
    .then( () => {
      dispatch(postBookingSuccess(bookingState));
    })
    .catch((error) => {
      dispatch(postBookingFailure(error.message));
    });
  }
}
