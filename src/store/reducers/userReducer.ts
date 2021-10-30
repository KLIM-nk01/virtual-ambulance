export enum userActionType {
  SET_USER = 'SET_USER',
}

interface IUserState {
  currentUser: {
    id_user: string;
    userRole: string;
    name: string;
  };
  isAuth: boolean;
}

export const initialState: IUserState = {
  currentUser: {
    id_user: '',
    userRole: '',
    name: '',
  },
  isAuth: false,
};

interface setUser {
  type: userActionType.SET_USER;
  payload: {
    user: { id_user: ''; userRole: ''; name: '' };
  };
}

type ActionType = setUser;

export const userReducer = (state = initialState, action: ActionType): IUserState => {
  switch (action.type) {
    case userActionType.SET_USER:
      return {
        ...state,
        currentUser: {
          id_user: action.payload.user.id_user,
          userRole: action.payload.user.userRole,
          name: action.payload.user.name,
        },
        isAuth: true,
      };
    default:
      return state;
  }
};
