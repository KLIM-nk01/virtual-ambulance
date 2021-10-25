import React, { useMemo, useState } from 'react';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from '../types';
import { ScheduleItem } from './SheduleItemStyle';

interface IScheduleItemProps {
  disabled?: boolean;
  wortTimeItem: { date: string; time: string };
  index: number;
  dispatch: (value: ActionType) => void;
  stateShedule: IScheduleInitialState;
}

const SheduleItem: React.FC<IScheduleItemProps> = ({
  wortTimeItem,
  index,
  dispatch,
  stateShedule,
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

    stateShedule.disabletItem === null
      ? dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabletItem: index } })
      : dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabletItem: null } });
  };

  useMemo(() => stateShedule.zeroing && setChoiceDate(choiceDate), [stateShedule.zeroing]);

  return (
    <ScheduleItem disabled={disabled} onClick={() => itemSelected()} choice={choiceDate}>
      <span>
        <b>Date:</b> {wortTimeItem.date}
      </span>
      <span>
        <b>Time:</b> {wortTimeItem.time}
      </span>
    </ScheduleItem>
  );
};

export default SheduleItem;
