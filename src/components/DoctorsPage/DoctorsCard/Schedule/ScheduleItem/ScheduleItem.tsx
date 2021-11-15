import React, { useMemo, useState } from 'react';
import { setChoiceWorkTime, setDisabledItem } from '../ScheduleReducer';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from '../types';
import { ScheduleItemWrapper } from './ScheduleItemStyle';

interface IScheduleItemProps {
  disabled?: boolean;
  workTimeItem: { date: string; time: string; _id: string };
  index: number;
  dispatch: (value: ActionType) => void;
  stateSchedule: IScheduleInitialState;
  disabledButton: boolean;
  setDisabledButton: React.Dispatch<ActionType>;
}

const ScheduleItem: React.FC<IScheduleItemProps> = ({
  workTimeItem,
  index,
  dispatch,
  stateSchedule,
  disabled,
  setDisabledButton,
}) => {
  const [choiceDate, setChoiceDate] = useState<boolean>(false);

  const itemSelected = () => {
    setChoiceDate(!choiceDate);

    dispatch(setChoiceWorkTime(workTimeItem));

    stateSchedule.disabledItem === null
      ? dispatch(setDisabledItem(index))
      : dispatch(setDisabledItem(null));
  };

  const chooseScheduleItem = () => {
    itemSelected();
    setDisabledButton({ type: ScheduleActionTypes.SET_DISABLED_BUTTON });
  };

  useMemo(() => stateSchedule.zeroing && setChoiceDate(choiceDate), [stateSchedule.zeroing]);

  return (
    <ScheduleItemWrapper
      disabled={disabled}
      onClick={() => chooseScheduleItem()}
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
