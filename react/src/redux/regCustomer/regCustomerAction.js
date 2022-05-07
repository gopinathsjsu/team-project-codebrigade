import axios from "axios";
import { POST_CUSTOMER_REQUEST, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_FAILURE } from "./regCustomerTypes";

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
  const config = {
    method: "post",
    url: "http://localhost:8080/customer",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email: email }
  }
  return (dispatch) => {
    dispatch(postCustomerRequest({ email: email }));
    //TODO: change this sample url with hotel url path while integration
    axios(config)
      .then(() => {
        dispatch(postCustomerSuccess({ email: email }));
      })
      .catch((error) => {
        dispatch(postCustomerFailure(error.message));
      });
  }
}
