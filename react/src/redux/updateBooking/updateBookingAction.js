import axios from "axios";
import {UPDATE_BOOKING_REQUEST, UPDATE_BOOKING_SUCCESS, UPDATE_BOOKING_FAILURE} from "./updateBookingTypes";
import { RestUrl } from '../../global'

export const updateBookingRequest = () => {
  return {
    type: UPDATE_BOOKING_REQUEST,
  }
};

export const updateBookingSuccess = (data) => {
  return {
    type: UPDATE_BOOKING_SUCCESS,
    payload: data
  }
};

export const updateBookingFailure = (error) => {
  return {
    type: UPDATE_BOOKING_FAILURE,
    payload: error
  }
};

export const updateBooking = (bookingState) => {
  return (dispatch) => {
    dispatch(updateBookingRequest);
    let url = RestUrl + "/booking?";
    Object.keys(bookingState).forEach((key) => url+= key + "=" + bookingState[key] + "&");
    url = url.substring(0, url.length-1);
    axios.put(url , { 
      email: bookingState.email,
        roomid: bookingState.roomid,
        checkin: bookingState.checkin, 
        checkout: bookingState.checkout,
        newcheckin: bookingState.newcheckin,
        newcheckout: bookingState.newcheckout 
    })
    .then( () => {
      dispatch(updateBookingSuccess(bookingState));
    })
    .catch((error) => {
      dispatch(updateBookingFailure(error.message));
    });
  }
}
