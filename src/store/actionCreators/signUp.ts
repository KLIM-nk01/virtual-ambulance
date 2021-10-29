import { ActionsType, AuthActionsType } from '@store/types/authUser';
import { ActionType, SignUpActionsType } from '@store/types/signUp';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import * as cookies from '@core/cookies/cookies';
import { API_URL } from '@constants/apiUrl';
import { ERROR_MESSAGE } from '@constants/errorMessage';

export const registrationUser = (userData: {
  userRole: string;
  name: string;
  lastName: string;
  birthday?: string;
  email: string;
  phone: string;
  address?: string;
  password: string;
  photo?: string;
  experience?: string;
  direction?: string;
  workPlace?: string;
}) => {
  return async (dispatch: Dispatch<ActionType | AuthActionsType>) => {
    dispatch({ type: SignUpActionsType.REGISTRATION_REQUEST });
    try {
      const response: AxiosResponse<{
        user: any;
        token: string;
      }> = await axios.post(API_URL.REGISTRATION, {
        ...userData,
      });

      response.status >= 200 &&
        dispatch({
          type: SignUpActionsType.REGISTRATION_USER_SUCCESS,
        });
      if (response.data && response.data.user) {
        dispatch({
          type: ActionsType.USER_IS_AUTH,
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
            type: SignUpActionsType.REGISTRATION_ERROR,
            errorMessage: error.response.data.message,
          });
      } else if (error.request) {
        dispatch({
          type: SignUpActionsType.REGISTRATION_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};
