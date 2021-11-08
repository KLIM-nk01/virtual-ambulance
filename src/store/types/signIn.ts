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
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_ERROR = 'SIGNIN_ERROR',
}

interface UserSignIn {
  type: ActionsType.SIGNIN_LOADING;
}

interface UserIsSignIn {
  type: ActionsType.SIGNIN_SUCCESS;
}

interface SignInError {
  type: ActionsType.SIGNIN_ERROR;
  errorMessage: string;
}

export type SignInActionsType = UserSignIn | UserIsSignIn | SignInError;
