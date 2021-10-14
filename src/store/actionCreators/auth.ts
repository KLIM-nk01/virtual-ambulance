import { ActionsType, AuthActionsType } from '@store/types/authUser';
import { Dispatch } from 'redux';

export const userAuth = (email?: string, password?: string) => {
  return async (dispatch: Dispatch<AuthActionsType>) => {
    try {
      dispatch({ type: ActionsType.AUTH_LOADING });

      setTimeout(() => {
        dispatch({
          type: ActionsType.USER_IS_AUTH,
          payload: {
            id: '#234',
            userRole: 'user',
            name: 'Nikita'
          }
        });
      }, 1000);
    } catch (e) {
      dispatch({
        type: ActionsType.USER_IS_UNAUTH,
        payload: 'Unauthorized or user not found'
      });
    }
  };
};

export const userUnAuth = () => {
  return {
    type: ActionsType.USER_IS_UNAUTH
  };
};
