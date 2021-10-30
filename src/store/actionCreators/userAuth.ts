import { setUser } from './user';
import { UserActionType } from '@store/types/user';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '@constants/apiUrl';
import * as cookies from '@core/cookies/cookies';

export const userAuth = () => {
  return async (dispatch: Dispatch<UserActionType | UserActionType>) => {
    try {
      const response: AxiosResponse<{ user: any; token: string }> = await axios.get(
        API_URL.USER_AUTHORIZATION,
        { headers: { Authorization: `${cookies.getCookie('token')}` } }
      );
      if (response.data && response.data.user) {
        dispatch(setUser(response.data.user));
      }
    } catch (error) {
      cookies.deleteCookie(['id_user', 'userRole', 'token']);
    }
  };
};
