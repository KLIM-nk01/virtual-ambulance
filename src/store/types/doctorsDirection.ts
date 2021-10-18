export interface IDirectionInitialState {
  directions: { id_direction: string; direction: string; iconSrc: string }[];
  loading: boolean;
  error: null | string;
}

export enum DirectionActionType {
  FETCH_DIRECTION = 'FETCH_DIRECTION',
  FETCH_DIRECTION_SUCCESS = 'FETCH_DIRECTION_SUCCESS',
  FETCH_DIRECTION_ERROR = 'FETCH_DIRECTION_ERROR',
}

interface FetchDirection {
  type: DirectionActionType.FETCH_DIRECTION;
}

interface FetchDirectionSuccess {
  type: DirectionActionType.FETCH_DIRECTION_SUCCESS;
  payload: { id_direction: string; direction: string, iconSrc: string; }[];
}

interface FetchDirectionError {
  type: DirectionActionType.FETCH_DIRECTION_ERROR;
  payload: string;
}

export type DirectionActionsType = FetchDirection | FetchDirectionSuccess | FetchDirectionError;
