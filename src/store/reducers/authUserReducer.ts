import { ActionsType, AuthActionsType, ILoginState} from "@store/types/authUser";

 const LoginState: ILoginState = {
  authLoading: false,
  authedUser: null,
  loginError: ''
};

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
