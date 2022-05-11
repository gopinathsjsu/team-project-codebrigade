import axios from "axios";
import {POST_CUSTOMER_REQUEST, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_FAILURE} from "./regCustomerTypes";
import { RestUrl } from '../../global'

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

const url = RestUrl + "/customer";
export const postCustomer = (email) => {
  const config = {
    method: "post",
    url: url,
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
