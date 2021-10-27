import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionsType, AuthActionsType } from '@store/types/authUser';

import * as cookies from '@core/cookies/cookies';

export const userAuth = (dataAuth?: any) => {
  return async (dispatch: Dispatch<AuthActionsType>) => {
    dispatch({ type: ActionsType.AUTH_LOADING });
    axios
      .post('http://localhost:3000/authorization/userAuth', dataAuth)
      .then((res) => {
        res.status >= 200 && console.log(res);

        dispatch({
          type: ActionsType.USER_IS_AUTH,
          payload: {
            id: res.data.user.id,
            userRole: res.data.user.userRole,
            name: res.data.user.name,
          },
        });
        cookies.setCookie('id', res.data.user.id, {});
        cookies.setCookie('userRole', res.data.user.userRole, {});
        cookies.setCookie('token', res.data.token, {});
      })
      .catch((error) => {
        if (error.response) {
          error.response.status >= 400 &&
            dispatch({
              type: ActionsType.AUTH_ERROR,
              errorMessage: error.response.data.message,
            });
        } else if (error.request) {
          dispatch({
            type: ActionsType.AUTH_ERROR,
            errorMessage: 'The server is not responding',
          });
          console.log(error.request);
        } else {
          dispatch({
            type: ActionsType.AUTH_ERROR,
            errorMessage: 'Error...',
          });
        }
      });
  };
};

export const userUnAuth = () => {
  return {
    type: ActionsType.AUTH_ERROR,
  };
};

