import React from 'react';
import Button from '@components/common/Button/Button';
import SheduleItem from './SheduleItem/SheduleItem';
import { ScheduleWrapper, WrapperHeader, ItemWrapper } from './SheduleStyle';

const Shedule: React.FC = () => {
  return (
    <ScheduleWrapper>
      <WrapperHeader>
        <span>Doctors schedule</span>
      </WrapperHeader>
      <ItemWrapper>
        <SheduleItem />
        <SheduleItem />
        <SheduleItem />
        <SheduleItem />
      </ItemWrapper>
      <Button disabled round variant="contained">
        Sign Up
      </Button>
    </ScheduleWrapper>
  );
};

export default Shedule;
