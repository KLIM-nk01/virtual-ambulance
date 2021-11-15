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

interface SetChoiceWorkTime {
  type: ScheduleActionTypes.SET_CHOICE_WORK_TIME;
  payload: {
    date: string;
    time: string;
    _id: string;
  };
}
interface SetDisabledItem {
  type: ScheduleActionTypes.SET_DISABLED_ITEM;
  payload: {
    disabledItem: null | number;
  };
}
interface SuccessMessage {
  type: ScheduleActionTypes.SUCCESS_MESSAGE;
}

interface SetDisabledButton {
  type: ScheduleActionTypes.SET_DISABLED_BUTTON;
}

export type ActionType = SetChoiceWorkTime | SetDisabledItem | SuccessMessage | SetDisabledButton;
