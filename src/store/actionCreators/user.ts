import { userActionType } from '@store/types/user';
export interface IUserAuth {
  id_user: string;
  userRole: string;
  name: string;
  photo: string;
}

export const setUser = (user: IUserAuth) => ({
  type: userActionType.SET_USER,
  payload: user,
});

export const logOut = () => ({
  type: userActionType.LOGOUT,
});
