import { UserActionType, IUserState, userActionType } from '@store/types/user';
import * as cookies from '@core/cookies/cookies';

export const initialState: IUserState = {
  currentUser: {
    id_user: '',
    userRole: '',
    name: '',
  },
  isAuth: false,
};

export const userReducer = (state = initialState, action: UserActionType): IUserState => {
  switch (action.type) {
    case userActionType.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case userActionType.LOGOUT:
      cookies.deleteCookie(['id', 'userRole', 'token']);
      return {
        ...state,
        currentUser: {
          id_user: '',
          userRole: '',
          name: '',
        },
        isAuth: false,
      };
    default:
      return state;
  }
};
