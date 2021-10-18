import React, { useReducer, useState } from 'react';
import Button from '@components/common/Button/Button';
import SheduleItem from './SheduleItem/SheduleItem';
import { ScheduleWrapper, WrapperHeader, ItemWrapper, SeccessMessage } from './SheduleStyle';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from './types';

export interface IScheduleProps {
  workTimeData: { date: string; time: string }[];
}

const initialState = {
  choiceWorkTime: {
    date: '',
    time: '',
  },
  disabletItem: null,
  zeroing: false,
  viewSeccessMessage: false,
};

const reducer = (state: IScheduleInitialState, action: ActionType): IScheduleInitialState => {
  switch (action.type) {
    case ScheduleActionTypes.SET_CHOICE_WORK_TIME:
      return { ...state, choiceWorkTime: { date: action.payload.date, time: action.payload.time } };
    case ScheduleActionTypes.SET_DISABLED_ITEM:
      return { ...state, disabletItem: action.payload.disabletItem };
    case ScheduleActionTypes.SECCESS_MESSAGE:
      return { ...state, viewSeccessMessage: true };
    default:
      return state;
  }
};

const Shedule: React.FC<IScheduleProps> = ({ workTimeData }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sendWorkTime = () => {
    console.log(state.disabletItem, state.choiceWorkTime);
    // setZeroing(!zeroing);
    // setDisabletItem(null);
    dispatch({ type: ScheduleActionTypes.SECCESS_MESSAGE });
  };

  const renderItem = () =>
    workTimeData.map((wortTimeItem, index) => {
      if (state.disabletItem === null) {
        return (
          <SheduleItem
            state={state}
            wortTimeItem={wortTimeItem}
            index={index}
            dispatch={dispatch}
          />
        );
      } else if (index === state.disabletItem) {
        return (
          <SheduleItem
            state={state}
            wortTimeItem={wortTimeItem}
            index={index}
            dispatch={dispatch}
          />
        );
      } else {
        return (
          <SheduleItem
            disabled
            state={state}
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
      {state.viewSeccessMessage && (
        <SeccessMessage>
          You have booked a ticket for {state.choiceWorkTime.time} on {state.choiceWorkTime.date}.
          Be healthy!
        </SeccessMessage>
      )}
      <Button onClick={() => sendWorkTime()} round variant="contained">
        Sign Up
      </Button>
    </ScheduleWrapper>
  );
};

export default Shedule;
