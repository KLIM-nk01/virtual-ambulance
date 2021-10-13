interface IAuthedUser {
  id: null | string;
  userRole: string;
  name: string;
}

interface ILoginState {
  readonly authLoading: boolean;
  readonly authedUser: IAuthedUser | null;
  readonly loginError: string;
}

const LoginState: ILoginState = {
  authLoading: false,
  authedUser: {
    id: '',
    userRole: 'string',
    name: 'string'
  },
  loginError: ''
};

export enum ActionsType {
  AUTH_LOADING = 'AUTH_LOADING',
  USER_IS_AUTH = 'USER_IS_AUTH',
  USER_IS_UNAUTH = 'USER_IS_UNAUTH'
}

interface UserAuth {
  type: ActionsType.AUTH_LOADING;
}

interface UserIsAuth {
  type: ActionsType.USER_IS_AUTH;
  payload: {
    id: string;
    userRole: string;
    name: string;
  };
}

interface UserIsUnAuth {
  type: ActionsType.USER_IS_UNAUTH;
  payload: string;
}

export type AuthActionsType = UserAuth | UserIsAuth | UserIsUnAuth;

export const authReducer = (
  state = LoginState,
  action: AuthActionsType
): ILoginState => {
  switch (action.type) {
    case ActionsType.AUTH_LOADING:
      return {
        ...state,
        authLoading: true
      };
    case ActionsType.USER_IS_AUTH:
      return {
        ...state,
        authLoading: false,
        authedUser: {
          id: action.payload.id,
          userRole: action.payload.userRole,
          name: action.payload.name
        }
      };
    case ActionsType.USER_IS_UNAUTH:
      return {
        authLoading: false,
        authedUser: null,
        loginError: action.payload
      };
    default:
      return state;
  }
};
