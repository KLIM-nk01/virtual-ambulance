import React from 'react';
import { CenterStaff, StaffItem, StaffWrapper } from './CenterStaffStyle';

interface IStaf {
  services?: string[];
}

const Staff: React.FC<IStaf> = ({ services }) => {
  return (
    <CenterStaff>
      <span>Our staff: </span>
      <StaffWrapper>
        {services?.map((sevice) => (
          <StaffItem>{sevice}</StaffItem>
        ))}
      </StaffWrapper>
    </CenterStaff>
  );
};

export default Staff;
