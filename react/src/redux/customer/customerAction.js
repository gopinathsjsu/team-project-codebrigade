import axios from "axios";
import {FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE} from "./customerTypes";
import { RestUrl } from '../../global'

export const fetchCustomersRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST,
  }
};

export const fetchCustomersSuccess = (data) => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: data
  }
};

export const fetchCustomersFailure = (error) => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error
  }
};

const url = RestUrl + "/customer";
export const fetchCustomers = (id,email,user_name,reward_points) => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest);
    //TODO: change this sample url with hotel url path while integration
    axios.get(url)
    .then( (response) => {
      dispatch(fetchCustomersSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCustomersFailure(error.message));
    });
  }
}
