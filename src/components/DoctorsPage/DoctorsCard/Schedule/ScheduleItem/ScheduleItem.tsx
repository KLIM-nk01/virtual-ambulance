import React, { useMemo, useState } from 'react';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from '../types';
import { ScheduleItemWrapper } from './ScheduleItemStyle';

interface IScheduleItemProps {
  disabled?: boolean;
  workTimeItem: { date: string; time: string; _id: string };
  index: number;
  dispatch: (value: ActionType) => void;
  stateSchedule: IScheduleInitialState;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
}

const ScheduleItem: React.FC<IScheduleItemProps> = ({
  workTimeItem,
  index,
  dispatch,
  stateSchedule,
  disabled,
  disabledButton,
  setDisabledButton,
}) => {
  const [choiceDate, setChoiceDate] = useState<boolean>(false);

  const itemSelected = () => {
    setChoiceDate(!choiceDate);

    dispatch({
      type: ScheduleActionTypes.SET_CHOICE_WORK_TIME,
      payload: {
        date: workTimeItem.date,
        time: workTimeItem.time,
        _id: workTimeItem._id,
      },
    });

    stateSchedule.disabledItem === null
      ? dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabledItem: index } })
      : dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabledItem: null } });
  };

  useMemo(() => stateSchedule.zeroing && setChoiceDate(choiceDate), [stateSchedule.zeroing]);

  return (
    <ScheduleItemWrapper
      disabled={disabled}
      onClick={() => {
        itemSelected();
        setDisabledButton(!disabledButton);
      }}
      choice={choiceDate}
    >
      <span>
        <b>Date:</b> {workTimeItem.date}
      </span>
      <span>
        <b>Time:</b> {workTimeItem.time}
      </span>
    </ScheduleItemWrapper>
  );
};

export default ScheduleItem;
