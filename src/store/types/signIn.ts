export enum SignInActionType {
  SIGNIN_SEND = 'SIGNIN_SEND',
  SIGNIN_SEND_SECCESS = 'SIGNIN_SEND_SECCESS',
  SIGNIN_SEND_ERROR = 'SIGNIN_SEND_ERROR',
  
}

export interface ISignInState {
  email: string;
  password: string;
  loading: boolean;
  serverError: null | string;
}

interface SignInSend {
  type: SignInActionType.SIGNIN_SEND;
}
interface SignInSeccess {
  type: SignInActionType.SIGNIN_SEND_SECCESS;
  signInData: {
    email: string;
    password: string;
  };
}
interface SignInError {
  type: SignInActionType.SIGNIN_SEND_ERROR;
  errorMessage: string;
}

export type ActionType = SignInSend | SignInSeccess | SignInError;
