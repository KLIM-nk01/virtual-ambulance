import { UserActionType, IUserState, userActionType } from '@store/types/user';
import * as cookies from '@core/cookies/cookies';

export const initialState: IUserState = {
  currentUser: {},
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
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};
