import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '@constants/apiUrl';
import { ERROR_MESSAGE } from '@constants/errorMessage';
import { ActionsType, SignInActionsType, IUserResponse } from '@store/types/signIn';
import { UserActionType } from '@store/types/user';
import * as cookies from '@core/cookies/cookies';
import { setUser } from './user';

export const userSignIn = (dataAuth: { password: string; email: string }) => {
  return async (dispatch: Dispatch<SignInActionsType | UserActionType>) => {
    dispatch({ type: ActionsType.SIGNIN_LOADING });

    try {
      const response: AxiosResponse<{
        user: IUserResponse;
      }> = await axios.post(API_URL.AUTHORIZATION, dataAuth, {
        withCredentials: true,
      });

      if (response.data && response.data.user) {
        cookies.setCookie('id_user', response.data.user.id_user, {});
        cookies.setCookie('userRole', response.data.user.userRole, {});
        dispatch(setUser(response.data.user));
        dispatch({ type: ActionsType.SIGNIN_SUCCESS });
      }
    } catch (error) {
      if (error.response) {
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
