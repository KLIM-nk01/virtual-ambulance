export interface ISignInData {
  password: string;
  email: string;
}

export interface ISignInUser {
  id: null | string;
  userRole: string;
  name: string;
}

export interface ISignInState {
  readonly signInLoading: boolean;
  readonly signInUser: ISignInUser | null;
  readonly errorMessage: string;
}

export enum ActionsType {
  SIGNIN_LOADING = 'SIGNIN_LOADING',
  USER_IS_SIGNIN = 'USER_IS_SIGNIN',
  SIGNIN_ERROR = 'SIGNIN_ERROR',
}

interface UserSignIn {
  type: ActionsType.SIGNIN_LOADING;
}

interface UserIsSignIn {
  type: ActionsType.USER_IS_SIGNIN;
  payload: {
    id: string;
    userRole: string;
    name: string;
  };
}

interface SignInError {
  type: ActionsType.SIGNIN_ERROR;
  errorMessage: string;
}

export type SignInActionsType = UserSignIn | UserIsSignIn | SignInError;
