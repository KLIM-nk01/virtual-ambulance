import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import * as cookies from '@core/cookies/cookies';
import { API_URL } from '@constants/apiUrl';
import { UserActionType } from '@store/types/user';
import { IUserAuth, setUser } from './user';

export const userAuth = () => {
  return async (dispatch: Dispatch<UserActionType | UserActionType>) => {
    try {
      const response: AxiosResponse<{
        user: IUserAuth;
        tokens: { accessToken: string; refreshToken: string };
      }> = await axios.get(API_URL.USER_AUTHORIZATION, { withCredentials: true });
      if (response.data && response.data.user) {
        dispatch(setUser(response.data.user));
        cookies.setCookie('id_user', response.data.user.id_user, {});
        cookies.setCookie('userRole', response.data.user.userRole, {});
      }
    } catch (error) {
      cookies.deleteCookie(['id_user', 'userRole']);
    }
  };
};
