import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionsType, SignInActionsType } from '@store/types/signIn';
import * as cookies from '@core/cookies/cookies';
import { API_URL } from '@constants/apiUrl';
import { ERROR_MESSAGE } from '@constants/errorMessage';

export const userSignIn = (dataAuth: { password: string; email: string }) => {
  return async (dispatch: Dispatch<SignInActionsType>) => {
    dispatch({ type: ActionsType.SIGNIN_LOADING });

    try {
      const response: AxiosResponse<{ user: any; token: string }> = await axios.post(
        API_URL.AUTHORIZATION,
        dataAuth
      );

      response.status >= 200 && console.log(response);

      if (response.data && response.data.user) {
        dispatch({
          type: ActionsType.USER_IS_SIGNIN,
          payload: {
            id: response.data.user.id,
            userRole: response.data.user.userRole,
            name: response.data.user.name,
          },
        });
        cookies.setCookie('id', response.data.user.id, {});
        cookies.setCookie('userRole', response.data.user.userRole, {});
        cookies.setCookie('token', response.data.token, {});
      }
    } catch (error) {
      if (error.response) {
        error.response.status >= 400 &&
          dispatch({
            type: ActionsType.SIGNIN_ERROR,
            errorMessage: error.response.data.message,
          });
      } else if (error.request) {
        dispatch({
          type: ActionsType.SIGNIN_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};

export const userUnAuth = () => {
  return {
    type: ActionsType.SIGNIN_ERROR,
  };
};
