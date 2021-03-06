import { types } from "../types";

const initialState = {
  loading: false,
  user: {},
  error: {},
};

// Depending on the action.type called, the "initialState" will be modified with the data from the "state"

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: {},
      };
    case types.SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.error,
      };
    default:
      return {
        state,
      };
  }
};

export default fetchDataReducer;
