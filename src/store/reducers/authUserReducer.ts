interface IAuthInitialState {
  id_user: null | string;
  userRole: string;
  name: string;
  loading: boolean;
  error: null | string;
}

const authInitialState: IAuthInitialState = {
  id_user: null,
  userRole: '',
  name: '',
  loading: false,
  error: null
};

export enum ActionsType {
  USER_AUTH_CHECK = 'USER_AUTH_CHECK',
  USER_IS_AUTH = 'USER_IS_AUTH',
  USER_IS_UNAUTH = 'USER_IS_UNAUTH',
  USER_AUTH_ERROR = 'USER_AUTH_ERROR'
}

interface UserAuth {
  type: ActionsType.USER_AUTH_CHECK;
}

interface UserIsAuth {
  type: ActionsType.USER_IS_AUTH;
  payload: {
    id_user: string;
    userRole: string;
    name: string;
  };
}

interface UserIsUnAuth {
  type: ActionsType.USER_IS_UNAUTH;
}

export type AuthActionsType = UserAuth | UserIsAuth | UserIsUnAuth;

export const authReduucer = (
  state = authInitialState,
  action: AuthActionsType
): IAuthInitialState => {
  switch (action.type) {
    case ActionsType.USER_AUTH_CHECK:
      return {
        ...state,
        loading: true
      };

    case ActionsType.USER_IS_AUTH:
      return {
        ...state,
        id_user: action.payload.id_user,
        userRole: action.payload.userRole,
        name: action.payload.name
      };

    case ActionsType.USER_IS_UNAUTH:
      return {
        ...state,
        id_user: null
      };

    default:
      return state;
  }
};
