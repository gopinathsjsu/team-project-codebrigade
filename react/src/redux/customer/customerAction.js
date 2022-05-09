import axios from "axios";
import {FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE} from "./customerTypes";

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

export const fetchCustomers = (id,email,user_name,reward_points) => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest);
    const url = "http://localhost:8080/customer";
    //TODO: change this sample url with hotel url path while integration
    axios.get(url , { params: { 
      id: id, 
      email: email, 
      user_name: user_name, 
      reward_points: reward_points
    } })
    .then( (response) => {
      dispatch(fetchCustomersSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchCustomersFailure(error.message));
    });
  }
}
