import {FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILURE} from "./searchTypes";

const initialState = {
  isLoading: true,
  data: [],
  error: ""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTELS_REQUEST: return {
      ...state,
      isLoading: true
    }
    case FETCH_HOTELS_SUCCESS: return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: ""
    }
    case FETCH_HOTELS_FAILURE: return {
      ...state,
      isLoading: false,
      data: [],
      error: action.payload
    }
    default: return state;
  }
};

export default searchReducer;
