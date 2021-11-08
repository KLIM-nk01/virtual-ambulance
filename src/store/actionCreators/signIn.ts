import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionsType, SignInActionsType } from '@store/types/signIn';
import * as cookies from '@core/cookies/cookies';
import { API_URL } from '@constants/apiUrl';
import { ERROR_MESSAGE } from '@constants/errorMessage';
import { UserActionType } from '@store/types/user';
import { setUser } from './user';

export const userSignIn = (dataAuth: { password: string; email: string }) => {
  return async (dispatch: Dispatch<SignInActionsType | UserActionType>) => {
    dispatch({ type: ActionsType.SIGNIN_LOADING });

    try {
      const response: AxiosResponse<{ user: any; token: string }> = await axios.post(
        API_URL.AUTHORIZATION,
        dataAuth
      );

      if (response.data && response.data.user) {
        dispatch(setUser(response.data.user));
        dispatch({ type: ActionsType.SIGNIN_SUCCESS });
        cookies.setCookie('id_user', response.data.user.id_user, {});
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
