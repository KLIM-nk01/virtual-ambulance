import React, { useState } from 'react';
import { ScheduleItem } from './SheduleItemStyle';

const SheduleItem: React.FC = () => {
  
  return (
    <ScheduleItem>
      <span>
        <b>Date:</b> 18.09.2021
      </span>
      <span>
        <b>Time:</b> 9.40
      </span>
    </ScheduleItem>
  );
};

export default SheduleItem;
