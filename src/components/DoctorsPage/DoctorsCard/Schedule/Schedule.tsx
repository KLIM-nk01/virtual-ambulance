import React, { useReducer, useState } from 'react';
import Button from '@components/common/Button/Button';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import { ScheduleWrapper, WrapperHeader, ItemWrapper, SuccessMessage } from './ScheduleStyle';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from './types';

export interface IScheduleProps {
  workTimeData: { date: string; time: string }[];
}

const initialState = {
  choiceWorkTime: {
    date: '',
    time: '',
  },
  disabledItem: null,
  zeroing: false,
  viewSuccessMessage: false,
};

const reducer = (state: IScheduleInitialState, action: ActionType): IScheduleInitialState => {
  switch (action.type) {
    case ScheduleActionTypes.SET_CHOICE_WORK_TIME:
      return { ...state, choiceWorkTime: { date: action.payload.date, time: action.payload.time } };
    case ScheduleActionTypes.SET_DISABLED_ITEM:
      return { ...state, disabledItem: action.payload.disabledItem };
    case ScheduleActionTypes.SUCCESS_MESSAGE:
      return { ...state, viewSuccessMessage: true };
    default:
      return state;
  }
};

const Schedule: React.FC<IScheduleProps> = ({ workTimeData }) => {
  const [stateSchedule, dispatch] = useReducer(reducer, initialState);

  const sendWorkTime = () => {
    dispatch({ type: ScheduleActionTypes.SUCCESS_MESSAGE });
  };

  const renderItem = () =>
    workTimeData.map((wortTimeItem, index) => {
      if (stateSchedule.disabledItem === null) {
        return (
          <ScheduleItem
            key={wortTimeItem.date + wortTimeItem.time}
            stateSchedule={stateSchedule}
            wortTimeItem={wortTimeItem}
            index={index}
            dispatch={dispatch}
          />
        );
      } else if (index === stateSchedule.disabledItem) {
        return (
          <ScheduleItem
            key={wortTimeItem.date + wortTimeItem.time}
            stateSchedule={stateSchedule}
            wortTimeItem={wortTimeItem}
            index={index}
            dispatch={dispatch}
          />
        );
      } else {
        return (
          <ScheduleItem
            key={wortTimeItem.date + wortTimeItem.time}
            disabled
            stateSchedule={stateSchedule}
            wortTimeItem={wortTimeItem}
            index={index}
            dispatch={dispatch}
          />
        );
      }
    });

  return (
    <ScheduleWrapper>
      <WrapperHeader>
        <span>Doctors schedule</span>
      </WrapperHeader>
      {workTimeData.length == 0 && <span>The doctor hasn't added a schedule yet.</span>}
      <ItemWrapper>{renderItem()}</ItemWrapper>
      {stateSchedule.viewSuccessMessage && (
        <SuccessMessage>
          You have booked a ticket for {stateSchedule.choiceWorkTime.time} on{' '}
          {stateSchedule.choiceWorkTime.date}. Be healthy!
        </SuccessMessage>
      )}
      <Button onClick={() => sendWorkTime()} round variant="contained">
        Sign Up
      </Button>
    </ScheduleWrapper>
  );
};

export default Schedule;
