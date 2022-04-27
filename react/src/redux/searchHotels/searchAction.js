import axios from "axios";
import {FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILURE} from "./searchTypes";

export const fetchHotelsRequest = () => {
  return {
    type: FETCH_HOTELS_REQUEST,
  }
};

export const fetchHotelsSuccess = (data) => {
  return {
    type: FETCH_HOTELS_SUCCESS,
    payload: data
  }
};

export const fetchHotelsFailure = (error) => {
  return {
    type: FETCH_HOTELS_FAILURE,
    payload: error
  }
};

export const fetchHotels = (parameter) => {
  return (dispatch) => {
    dispatch(fetchHotelsRequest);
    const url = "http://localhost:8080/hotel";
    //TODO: change this sample url with hotel url path while integration
    axios.get(url + "/" + parameter)
    .then( (response) => {
      dispatch(fetchHotelsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchHotelsFailure(error.message));
    });
  }
}
