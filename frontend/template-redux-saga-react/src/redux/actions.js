import { types } from "./types";

// The three actions with the appropriate parameters
// The payload is defined by whatever the parameter provides
// It is the payload which is then referred to, when the data from the action needs to be extracted/exported

export function fetchData(data) {
  return {
    type: types.SEND_REQUEST,
    payload: data,
  };
}

export const fetchDataSuccess = (user) => {
  return {
    type: types.SEND_REQUEST_SUCCESS,
    payload: user,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {},
    error: error,
  };
};
