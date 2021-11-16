export interface IScheduleInitialState {
  choiceWorkTime: {
    date: string;
    time: string;
    _id: string;
  };
  disabledItem: null | number;
  disabledButton: boolean;
  zeroing: boolean;
  viewSuccessMessage: boolean;
}

export enum ScheduleActionTypes {
  SET_CHOICE_WORK_TIME = 'SET_CHOICE_WORK_TIME',
  SET_DISABLED_ITEM = 'SET_DISABLED_ITEM',
  SET_DISABLED_BUTTON = 'SET_DISABLED_BUTTON',
  SUCCESS_MESSAGE = 'SUCCESS_MESSAGE',
}

export interface SetChoiceWorkTime {
  type: ScheduleActionTypes.SET_CHOICE_WORK_TIME;
  payload: {
    date: string;
    time: string;
    _id: string;
  };
}
export interface SetDisabledItem {
  type: ScheduleActionTypes.SET_DISABLED_ITEM;
  payload: null | number;
}
interface SuccessMessage {
  type: ScheduleActionTypes.SUCCESS_MESSAGE;
}

export interface SetDisabledButton {
  type: ScheduleActionTypes.SET_DISABLED_BUTTON;
}

export type ActionType = SetChoiceWorkTime | SetDisabledItem | SuccessMessage | SetDisabledButton;
