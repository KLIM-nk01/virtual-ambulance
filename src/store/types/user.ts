export enum userActionType {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

export interface IUserState {
  currentUser: { id_user: string; userRole: string; name: string; photo: string };
  isAuth: boolean;
}
interface setUser {
  type: userActionType.SET_USER;
  payload: { id_user: string; userRole: string; name: string; photo: string };
}
interface logOut {
  type: userActionType.LOGOUT;
}
export type UserActionType = setUser | logOut;
