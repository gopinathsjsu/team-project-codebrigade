import {FETCH_REWARDS_REQUEST, FETCH_REWARDS_SUCCESS, FETCH_REWARDS_FAILURE} from "./rewardsTypes";

const initialState = {
  isLoading: true,
  data: 0,
  error: ""
};

const rewardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REWARDS_REQUEST: return {
      ...state,
      isLoading: true
    }
    case FETCH_REWARDS_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: ""
    }
    case FETCH_REWARDS_FAILURE: return {
      ...state,
      isLoading: false,
      data: [],
      error: action.payload
    }
    default: return state;
  }
};

export default  rewardsReducer;
