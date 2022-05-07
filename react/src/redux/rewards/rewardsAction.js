import axios from "axios";
import {FETCH_REWARDS_REQUEST, FETCH_REWARDS_SUCCESS, FETCH_REWARDS_FAILURE} from "./rewardsTypes";

export const fetchRewardsRequest = () => {
  return {
    type: FETCH_REWARDS_REQUEST,
  }
};

export const fetchRewardsSuccess = (data) => {
  return {
    type: FETCH_REWARDS_SUCCESS,
    payload: data,
  }
};

export const fetchRewardsFailure = (error) => {
  return {
    type: FETCH_REWARDS_FAILURE,
    payload: error
  }
};

export const fetchRewards = () => {
  return (dispatch) => {
    dispatch(fetchRewardsRequest);
    const url = "http://localhost:8080/customer/rewards/{emailId}";
    //TODO: change this sample url with hotel url path while integration
    axios.get(url + "/" + emailId)
    .then( (response) => {
      dispatch(fetchRewardsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchRewardsFailure(error.message));
    });
  }
}
