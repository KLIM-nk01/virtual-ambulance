import React, { useMemo, useState } from 'react';
import { ScheduleItem } from './SheduleItemStyle';

interface IScheduleItemProps {
  wortTimeItem: { date: string; time: string };
  setChoiceWorkTime: (workTime: { date: string; time: string }) => void;
  setDisabletItem: (value: number | null) => void;
  index: number;
  disabled?: boolean;
  disabletItem?: number | null;
  zeroing?: boolean;
}

const SheduleItem: React.FC<IScheduleItemProps> = ({
  wortTimeItem,
  setChoiceWorkTime,
  setDisabletItem,
  index,
  disabled,
  disabletItem,
  zeroing,
}) => {
  const [choiceDate, setChoiceDate] = useState<boolean>(false);

  const itemSelected = () => {
    setChoiceDate(!choiceDate);

    setChoiceWorkTime({
      date: wortTimeItem.date,
      time: wortTimeItem.time,
    });

    disabletItem === null ? setDisabletItem(index) : setDisabletItem(null);
  };

  useMemo(() => zeroing && setChoiceDate(choiceDate), [zeroing]);

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
