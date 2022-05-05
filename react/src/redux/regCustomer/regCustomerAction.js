import axios from "axios";
import {POST_CUSTOMER_REQUEST, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_FAILURE} from "./regCustomerTypes";

export const postCustomerRequest = () => {
  return {
    type: POST_CUSTOMER_REQUEST,
  }
};

export const postCustomerSuccess = (data) => {
  return {
    type: POST_CUSTOMER_SUCCESS,
    payload: data
  }
};

export const postCustomerFailure = (error) => {
  return {
    type: POST_CUSTOMER_FAILURE,
    payload: error
  }
};

export const postCustomer = (email) => {
  return (dispatch) => {
    dispatch(postCustomerRequest);
    const url = "http://localhost:8080/customer";
    //TODO: change this sample url with hotel url path while integration
    axios.post(url)
    .then( () => {
      dispatch(postCustomerSuccess({email: email}));
    })
    .catch((error) => {
      dispatch(postCustomerFailure(error.message));
    });
  }
}
