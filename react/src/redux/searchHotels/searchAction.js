import axios from "axios";
import {FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILURE} from "./searchTypes";
import { RestUrl } from '../../global'

export const fetchHotelsRequest = () => {
  return {
    type: FETCH_HOTELS_REQUEST,
  }
};

export const fetchHotelsSuccess = (data, dates, guests) => {
  return {
    type: FETCH_HOTELS_SUCCESS,
    payload: data,
    dates: dates,
    guests: guests
  }
};

export const fetchHotelsFailure = (error) => {
  return {
    type: FETCH_HOTELS_FAILURE,
    payload: error
  }
};

export const fetchHotels = (location, checkin, checkout, numRooms, numGuests) => {
  return (dispatch) => {
    dispatch(fetchHotelsRequest);
    const url = RestUrl + "/hotel";
    //TODO: change this sample url with hotel url path while integration
    axios.get(url + "/" + location , { params: { 
      checkin: checkin, 
      checkout: checkout, 
      numRooms: numRooms, 
      numGuests: numGuests 
    } })
    .then( (response) => {
      dispatch(fetchHotelsSuccess(response.data, {checkin: checkin, checkout: checkout}, {numRooms: numRooms, numGuests: numGuests}));
    })
    .catch((error) => {
      dispatch(fetchHotelsFailure(error.message));
    });
  }
}
