import React, { useMemo, useState } from 'react';
import { ActionType, ScheduleActionTypes } from '../types';
import { ScheduleItem } from './SheduleItemStyle';

interface IScheduleItemProps {
  disabled?: boolean;
  wortTimeItem: { date: string; time: string };
  index: number;
  dispatch: (value: ActionType) => void;
  state: any;
}

const SheduleItem: React.FC<IScheduleItemProps> = ({ wortTimeItem, index, dispatch, state , disabled}) => {
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

    state.disabletItem === null
      ? dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabletItem: index } })
      : dispatch({ type: ScheduleActionTypes.SET_DISABLED_ITEM, payload: { disabletItem: null } });
  };

  useMemo(() => state.zeroing && setChoiceDate(choiceDate), [state.zeroing]);

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
