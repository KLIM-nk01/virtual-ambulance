import {
  ActionType,
  IScheduleInitialState,
  ScheduleActionTypes,
  SetChoiceWorkTime,
  SetDisabledItem,
} from './types';

export const initialState = {
  choiceWorkTime: {
    date: '',
    time: '',
    _id: '',
  },
  disabledItem: null,
  disabledButton: false,
  zeroing: false,
  viewSuccessMessage: false,
};

export const setDisabledItem = (payload: null | number): SetDisabledItem => {
  return {
    type: ScheduleActionTypes.SET_DISABLED_ITEM,
    payload: payload,
  };
};

export const setChoiceWorkTime = (workTime: {
  date: string;
  time: string;
  _id: string;
}): SetChoiceWorkTime => {
  return {
    type: ScheduleActionTypes.SET_CHOICE_WORK_TIME,
    payload: workTime,
  };
};

export const reducer = (
  state: IScheduleInitialState,
  action: ActionType
): IScheduleInitialState => {
  switch (action.type) {
    case ScheduleActionTypes.SET_CHOICE_WORK_TIME:
      return {
        ...state,
        viewSuccessMessage: false,
        choiceWorkTime: action.payload,
      };
    case ScheduleActionTypes.SET_DISABLED_ITEM:
      return { ...state, viewSuccessMessage: false, disabledItem: action.payload };
    case ScheduleActionTypes.SUCCESS_MESSAGE:
      return { ...state, viewSuccessMessage: true };
    case ScheduleActionTypes.SET_DISABLED_BUTTON:
      return { ...state, disabledButton: !state.disabledButton };
    default:
      return state;
  }
};
