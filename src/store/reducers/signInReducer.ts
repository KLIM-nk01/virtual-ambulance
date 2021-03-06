import { ActionsType, SignInActionsType, ISignInState } from '@store/types/signIn';

const SignInState: ISignInState = {
  signInLoading: false,
  signInUser: null,
  errorMessage: '',
};

export const signInReducer = (state = SignInState, action: SignInActionsType): ISignInState => {
  switch (action.type) {
    case ActionsType.SIGNIN_LOADING:
      return {
        ...state,
        signInLoading: true,
      };
    case ActionsType.SIGNIN_SUCCESS:
      return {
        ...state,
        signInLoading: false,
        errorMessage: '',
      };
    case ActionsType.SIGNIN_ERROR:
      return {
        signInLoading: false,
        signInUser: null,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
