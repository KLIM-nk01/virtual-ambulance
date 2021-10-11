import { AuthActionType } from '@store/reducers/authReducer';
import { Dispatch } from 'redux';

export const auth = () => {
  return (dispatch: Dispatch<AuthActionType>) => {
    try {
      dispatch;
    } catch (e) {}
  };
};
