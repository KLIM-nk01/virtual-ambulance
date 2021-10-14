import { SignInActionType } from './../types/signIn';
import { Dispatch } from 'redux';
import { ActionType } from '@store/types/signIn';

export const sendSignInData = (email: string, password: string) => {
  return (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({
        type: SignInActionType.SIGNIN_SEND_SECCESS,
        signInData: { email: email, password: password },
      });
      setTimeout(() => {  //request 
        
      })
    } catch (e) {
      dispatch({
        type: SignInActionType.SIGNIN_SEND_ERROR,
        errorMessage: 'Invalid email or password.',
      });
    }
  };
};
