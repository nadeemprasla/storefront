import API from "../utils/API";
import { returnErrors, clearErrors } from "./errorActions";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from "../actions/types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  API.getUsers(tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({
  firstName,
  lastName,
  username,
  email,
  password
}) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = {
    firstName,
    lastName,
    username,
    email,
    password
  };

  API.saveUser(body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

export const login = ({
  username,
  password
}) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = {
    username,
    password
  };

  API.loginUser(body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

// export const tokenConfig = getState => {
//   const token = getState().auth.token;
//   let body = {}
//   if (token) {
//     body = { "x-auth-token": token }
//     console.log(body)
//   }
//   return body;
// };
export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};