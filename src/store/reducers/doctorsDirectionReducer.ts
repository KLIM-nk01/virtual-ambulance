import { DirectionActionsType, DirectionActionType, IDirectionInitialState } from "@store/types/doctorsDirection";

export const initialState: IDirectionInitialState = {
 directions: [],
 loading: false,
 error: null
};

export const doctorsDirectionReducer = (
  state = initialState,
  action: DirectionActionsType
): IDirectionInitialState => {
  switch (action.type) {
    case DirectionActionType.FETCH_DIRECTION:
      return { loading: true, error: null, directions: [] };
    case DirectionActionType.FETCH_DIRECTION_SUCCESS:
      return { loading: false, error: null, directions: action.payload };
    case DirectionActionType.FETCH_DIRECTION_ERROR:
      return { loading: false, error: action.payload, directions: [] };
    default:
      return state;
  }
};
