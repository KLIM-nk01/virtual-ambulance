import { ActionsType, AuthActionsType } from '@store/reducers/authUserReducer';
import { Dispatch } from 'redux';

export const userAuth = () => {
  return async (dispatch: Dispatch<AuthActionsType>) => {
    try {
      dispatch({ type: ActionsType.USER_AUTH_CHECK });
      setTimeout(() => {
        dispatch({
          type: ActionsType.USER_IS_AUTH,
          payload: {
            id_user: '#234',
            userRole: 'user',
            name: 'Nikita'
          }
        });
      }, 1000);
    } catch (e) {
      
    }
  };
};
