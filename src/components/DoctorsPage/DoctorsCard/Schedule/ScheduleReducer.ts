import {
  ActionType,
  IScheduleInitialState,
  ScheduleActionTypes,
  SetChoiceWorkTime,
  SetDisabledItem,
  SetDisabledButton,
} from './types';

export const initialState = {
  choiceWorkTime: {
    date: '',
    time: '',
    _id: '',
  },
  disabledItem: '',
  disabledButton: false,
  zeroing: false,
  viewSuccessMessage: false,
};

export const setDisabledItem = (payload: string): SetDisabledItem => ({
  type: ScheduleActionTypes.SET_DISABLED_ITEM,
  payload: payload,
});

export const setChoiceWorkTime = (workTime: {
  date: string;
  time: string;
  _id: string;
}): SetChoiceWorkTime => ({
  type: ScheduleActionTypes.SET_CHOICE_WORK_TIME,
  payload: workTime,
});

export const serDisabledButton = (): SetDisabledButton => ({
  type: ScheduleActionTypes.SET_DISABLED_BUTTON,
});

export const scheduleReducer = (
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
