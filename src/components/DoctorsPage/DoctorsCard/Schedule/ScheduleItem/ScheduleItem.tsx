import React, { useMemo, useState } from 'react';
import { serDisabledButton, setChoiceWorkTime, setDisabledItem } from '../ScheduleReducer';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from '../types';
import { ScheduleItemWrapper } from './ScheduleItemStyle';
import Tooltip from '@mui/material/Tooltip';

interface IScheduleItemProps {
  disabled?: boolean;
  workTimeItem: { date: string; time: string; _id: string; patientData: string };
  scheduleDispatch: (value: ActionType) => void;
  stateSchedule: IScheduleInitialState;
  disabledButton: boolean;
  setDisabledButton: React.Dispatch<ActionType>;
}

const ScheduleItem: React.FC<IScheduleItemProps> = ({
  workTimeItem,
  scheduleDispatch,
  stateSchedule,
  disabled,
}) => {
  const [choiceDate, setChoiceDate] = useState<boolean>(false);

  const itemSelected = () => {
    setChoiceDate(!choiceDate);

    scheduleDispatch(setChoiceWorkTime(workTimeItem));

    !stateSchedule.disabledItem
      ? scheduleDispatch(setDisabledItem(workTimeItem._id))
      : scheduleDispatch(setDisabledItem(''));
  };

  const chooseScheduleItem = () => {
    itemSelected();
    scheduleDispatch(serDisabledButton());
  };

  useMemo(() => stateSchedule.zeroing && setChoiceDate(choiceDate), [stateSchedule.zeroing]);

  return (
    <Tooltip
      disableHoverListener={!workTimeItem.patientData}
      title={workTimeItem.patientData && 'This time is already taken.'}
      placement="top"
    >
      <ScheduleItemWrapper disabled={disabled} onClick={chooseScheduleItem} choice={choiceDate}>
        <span>
          <b>Date:</b> {workTimeItem.date}
        </span>
        <span>
          <b>Time:</b> {workTimeItem.time}
        </span>
      </ScheduleItemWrapper>
    </Tooltip>
  );
};

export default ScheduleItem;
