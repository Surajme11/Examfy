import axios from 'axios';

import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  //   USER_DETAILS_RESET,
} from '../constants/userConstants';

//user login action calls the '/api/users/login' route of the sever to
//transfer data from frontend to backend after that it verifies the data and do it's work.
// if an error shows up USER_LOGIN_FAILED is dispatched with the payload which holds the error and error message.
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      {
        email,
        password,
      },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// logout functions logs the user out from the application.

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  //   dispatch({ type: USER_DETAILS_RESET });
};

//user login action calls the '/api/users/' route of the sever to
//transfer data from frontend to backend after that it verifies the data and do it's work.
// if an error shows up USER_REGISTER_FAILED is dispatched with the payload which holds the error and error message.
export const register =
  (name, email, password, roll, gender) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = {
        headers: {
          'content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users/',
        { name, email, roll, gender, password },
        config
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
