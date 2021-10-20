export interface IScheduleInitialState {
  choiceWorkTime: {
    date: string;
    time: string;
  };
  disabletItem: null | number;
  zeroing: boolean;
  viewSeccessMessage: boolean;
}

export enum ScheduleActionTypes {
  SET_CHOICE_WORK_TIME = 'SET_CHOICE_WORK_TIME',
  SET_DISABLED_ITEM = 'SET_DISABLED_ITEM',
  SECCESS_MESSAGE = 'SECCESS_MESSAGE',
}

interface SetChoiceWorkTime {
  type: ScheduleActionTypes.SET_CHOICE_WORK_TIME;
  payload: {
    date: string;
    time: string;
  };
}
interface SetDisabledItem {
  type: ScheduleActionTypes.SET_DISABLED_ITEM;
  payload: {
    disabletItem: null | number;
  };
}
interface SeccessMessage {
  type: ScheduleActionTypes.SECCESS_MESSAGE;
}

export type ActionType = SetChoiceWorkTime | SetDisabledItem | SeccessMessage;
