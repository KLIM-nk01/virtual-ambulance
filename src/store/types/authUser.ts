export interface IAuthedUser {
  id: null | string;
  userRole: string;
  name: string;
}

export interface ILoginState {
  readonly authLoading: boolean;
  readonly authedUser: IAuthedUser | null;
  readonly loginError: string;
}

export const LoginState: ILoginState = {
  authLoading: false,
  authedUser: null,
  loginError: ''
};

export enum ActionsType {
  AUTH_LOADING = 'AUTH_LOADING',
  USER_IS_AUTH = 'USER_IS_AUTH',
  USER_IS_UNAUTH = 'USER_IS_UNAUTH'
}

interface UserAuth {
  type: ActionsType.AUTH_LOADING;
}

interface UserIsAuth {
  type: ActionsType.USER_IS_AUTH;
  payload: {
    id: string;
    userRole: string;
    name: string;
  };
}

interface UserIsUnAuth {
  type: ActionsType.USER_IS_UNAUTH;
  payload: string;
}

export type AuthActionsType = UserAuth | UserIsAuth | UserIsUnAuth;
