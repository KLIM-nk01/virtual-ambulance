interface IAuthInitialState {
  isAuth: boolean;
  user: null | object;
}

const authInitialState: IAuthInitialState = {
  isAuth: false,
  user: {}
};

enum AuthActionsType {
  SEND_AUTH_DATA = 'SEND_AUTH_DATA'
}

interface SendAuthData {
  type: AuthActionsType.SEND_AUTH_DATA;
  payload: {};
}

export type AuthActionType = SendAuthData;

export const authReduucer = (
  state = authInitialState,
  action: AuthActionType
): IAuthInitialState => {
  switch (action.type) {
    case AuthActionsType.SEND_AUTH_DATA:
      return {
        ...state,
        isAuth: true
      };
    default:
      return state;
  }
};
