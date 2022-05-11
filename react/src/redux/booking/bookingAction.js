import axios from "axios";
import {POST_BOOKING_REQUEST, POST_BOOKING_SUCCESS, POST_BOOKING_FAILURE} from "./bookingTypes";
import { RestUrl } from '../../global'

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

const url = RestUrl + "/booking";
export const postBooking = (bookingState) => {
  const config = {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: bookingState
  }
  return (dispatch) => {
    dispatch(postBookingRequest);
    //TODO: change this sample url with hotel url path while integration
    axios(config)
    .then( () => {
      dispatch(postBookingSuccess(bookingState));
    })
    .catch((error) => {
      dispatch(postBookingFailure(error.message));
    });
  }
}
