export interface IAuthData { 
  password: string,
  email: string
}

export interface IAuthedUser {
    id: null | string;
    userRole: string;
    name: string;
  }
  
  export interface ILoginState {
    readonly authLoading: boolean;
    readonly authedUser: IAuthedUser | null;
    readonly errorMessage: string;
  }
  
  
  export enum ActionsType {
    AUTH_LOADING = 'AUTH_LOADING',
    USER_IS_AUTH = 'USER_IS_AUTH',
    AUTH_ERROR = 'AUTH_ERROR'
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
  
  interface AuthError {
    type: ActionsType.AUTH_ERROR;
    errorMessage: string;
  }
  
  export type AuthActionsType = UserAuth | UserIsAuth | AuthError;
  