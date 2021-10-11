import { ActionType, ISignInState, SignInActionType } from '@store/types/signIn';

const initialSignInState: ISignInState = {
  email: '',
  password: '',
  loading: false,
  serverError: null,
};

export const signInReduser = (state = initialSignInState, action: ActionType): ISignInState => {
  switch (action.type) {
    case SignInActionType.SIGNIN_SEND:
      return { ...state, loading: true };
    case SignInActionType.SIGNIN_SEND_SECCESS:
      return {
        ...state,
        email: action.signInData.email,
        password: action.signInData.password,
      };
    case SignInActionType.SIGNIN_SEND_ERROR:
      return { ...state, serverError: action.errorMessage };
    default:
      return state;
  }
};
