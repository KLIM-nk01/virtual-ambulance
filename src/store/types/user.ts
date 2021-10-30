export enum userActionType {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

export interface IUserState {
  currentUser: {};
  isAuth: boolean;
}
interface setUser {
  type: userActionType.SET_USER;
  payload: { id_user: string; userRole: string; name: string };
}
interface logOut {
  type: userActionType.LOGOUT;
}
export type UserActionType = setUser | logOut;
