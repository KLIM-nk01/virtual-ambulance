import React, { useState } from 'react';
import Button from '@components/common/Button/Button';
import SheduleItem from './SheduleItem/SheduleItem';
import { ScheduleWrapper, WrapperHeader, ItemWrapper } from './SheduleStyle';

interface IScheduleProps {
  workTimeData: { date: string; time: string }[];
}

const Shedule: React.FC<IScheduleProps> = ({ workTimeData }) => {
  const [choiceWorkTime, setChoiceWorkTime] = useState({
    date: '',
    time: '',
  });

  const [disabletItem, setDisabletItem] = useState<number | null>(null);

  const [zeroing, setZeroing] = useState<boolean>(false);

  const sendWorkTime = () => {
    console.log(disabletItem, choiceWorkTime);
    // setZeroing(!zeroing);
    // setDisabletItem(null);
  };
  return (
    <ScheduleWrapper>
      
      <WrapperHeader>
        <span>Doctors schedule</span>
      </WrapperHeader>
      {workTimeData.length == 0 && <span>The doctor hasn't added a schedule yet.</span>}
      <ItemWrapper>
        {workTimeData.map((wortTimeItem, index) => {
          return disabletItem === null ? (
            <SheduleItem
              wortTimeItem={wortTimeItem}
              index={index}
              setDisabletItem={setDisabletItem}
              disabletItem={disabletItem}
              setChoiceWorkTime={setChoiceWorkTime}
            />
          ) : index === disabletItem ? (
            <SheduleItem
              index={index}
              setDisabletItem={setDisabletItem}
              setChoiceWorkTime={setChoiceWorkTime}
              wortTimeItem={wortTimeItem}
            />
          ) : (
            <SheduleItem
              disabled
              index={index}
              setDisabletItem={setDisabletItem}
              setChoiceWorkTime={setChoiceWorkTime}
              wortTimeItem={wortTimeItem}
            />
          );
        })}
      </ItemWrapper>
      <Button onClick={() => sendWorkTime()} round variant="contained">
        Sign Up
      </Button>
    </ScheduleWrapper>
  );
};

export default Shedule;
