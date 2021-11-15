export interface IDirection {
  src?: string;
  direction: string;
  setChoiseDirection: any;
  choiseDirection: string[];
}

export interface IDirectionInitialState {
  enableDirection: boolean;
  allDoctors: boolean;
}

export enum DirectionActionType {
  SET_ENABLE_DIRECTION = 'SET_ENABLE_DIRECTION',
  SET_ALL_DOCTORS_DIRECTION = 'SET_ALL_DOCTORS_DIRECTION',
}

interface SetEnableDirection {
  type: DirectionActionType.SET_ENABLE_DIRECTION;
}
interface SetAllDoctorsDirection {
  type: DirectionActionType.SET_ALL_DOCTORS_DIRECTION;
}

export type ActionType = SetEnableDirection | SetAllDoctorsDirection;
