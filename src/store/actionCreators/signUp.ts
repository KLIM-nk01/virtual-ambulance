import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionType, SignUpActionsType } from '@store/types/signUp';
import { UserActionType } from '@store/types/user';
import * as cookies from '@core/cookies/cookies';
import { API_URL } from '@constants/apiUrl';
import { ERROR_MESSAGE } from '@constants/errorMessage';
import { setUser } from './user';

type IUserData = string | { value: string };

export const registrationUser = (userData: { [key: string]: any; photo?: any }) => {
  return async (dispatch: Dispatch<ActionType | UserActionType>) => {
    dispatch({ type: SignUpActionsType.REGISTRATION_REQUEST });

    const form = new FormData();
    const arr = Object.keys(userData);

    arr.forEach((el) => {
      if (el === 'photo') form.append(el, userData[el][0]);
      else {
        if (el === 'direction' || el === 'workPlace') {
          form.append(el, userData[el].value);
        } else form.append(el, userData[el]);
      }
    });

    try {
      const response: AxiosResponse<{
        user: any;
        tokens: { accessToken: string; refreshToken: string };
      }> = await axios.post(API_URL.REGISTRATION, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      response.status >= 200 &&
        dispatch({
          type: SignUpActionsType.REGISTRATION_USER_SUCCESS,
        });
      if (response.data && response.data.user) {
        cookies.setCookie('id_user', response.data.user.id_user, {});
        cookies.setCookie('userRole', response.data.user.userRole, {});
        dispatch(setUser(response.data.user));
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
