import axios from "axios";
import {FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILURE} from "./searchTypes";

export const fetchHotelsRequest = () => {
  return {
    type: FETCH_HOTELS_REQUEST,
  }
};

export const fetchHotelsSuccess = (data, dates) => {
  return {
    type: FETCH_HOTELS_SUCCESS,
    payload: data,
    dates: dates
  }
};

export const fetchHotelsFailure = (error) => {
  return {
    type: FETCH_HOTELS_FAILURE,
    payload: error
  }
};

export const fetchHotels = (location, checkin, checkout) => {
  return (dispatch) => {
    dispatch(fetchHotelsRequest);
    const url = "http://localhost:8080/hotel";
    //TODO: change this sample url with hotel url path while integration
    axios.get(url + "/" + location)
    .then( (response) => {
      dispatch(fetchHotelsSuccess(response.data, {checkin: checkin, checkout: checkout}));
    })
    .catch((error) => {
      dispatch(fetchHotelsFailure(error.message));
    });
  }
}
