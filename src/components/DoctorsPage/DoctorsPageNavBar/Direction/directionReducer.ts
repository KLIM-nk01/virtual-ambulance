import { ActionType, DirectionActionType, IDirectionInitialState } from './types';

export const directionReducer = (
  state: IDirectionInitialState,
  action: ActionType
): IDirectionInitialState => {
  switch (action.type) {
    case DirectionActionType.SET_ENABLE_DIRECTION:
      return {
        ...state,
        enableDirection: !state.enableDirection,
      };
    case DirectionActionType.SET_ALL_DOCTORS_DIRECTION:
      return {
        ...state,
        allDoctors: !state.allDoctors,
      };
    default:
      return state;
  }
};
