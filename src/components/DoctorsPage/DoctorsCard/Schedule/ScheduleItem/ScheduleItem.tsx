import React, { useMemo, useState } from 'react';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from '../types';
import { ScheduleItemWrapper } from './ScheduleItemStyle';


interface IScheduleItemProps {
  disabled?: boolean;
  wortTimeItem: { date: string; time: string };
  index: number;
  dispatch: (value: ActionType) => void;
  stateSchedule: IScheduleInitialState;
}

const ScheduleItem: React.FC<IScheduleItemProps> = ({
  wortTimeItem,
  index,
  dispatch,
  stateSchedule,
  disabled,
}) => {
  const [choiceDate, setChoiceDate] = useState<boolean>(false);

  const itemSelected = () => {
    setChoiceDate(!choiceDate);

    dispatch({
      type: ScheduleActionTypes.SET_CHOICE_WORK_TIME,
      payload: {
        date: wortTimeItem.date,
        time: wortTimeItem.time,
      },
    });

    stateSchedule.disabledItem === null
      ? dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabledItem: index } })
      : dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabledItem: null } });
  };

  useMemo(() => stateSchedule.zeroing && setChoiceDate(choiceDate), [stateSchedule.zeroing]);

  return (
    <ScheduleItemWrapper disabled={disabled} onClick={() => itemSelected()} choice={choiceDate}>
      <span>
        <b>Date:</b> {wortTimeItem.date}
      </span>
      <span>
        <b>Time:</b> {wortTimeItem.time}
      </span>
    </ScheduleItemWrapper>
  );
};

export default ScheduleItem;
