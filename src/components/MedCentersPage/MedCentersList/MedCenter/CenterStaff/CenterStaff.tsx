import React from 'react';
import { CenterStaff, StaffItem, StaffWrapper, Information } from './CenterStaffStyle';
import NoAva from '@assets/NoAvatar.png';

interface IStaff {
  medStaff: {
    userData: {
      name: string;
      lastName: string;
      photo: string;
    };
    direction: string;
  }[];
}

const Staff: React.FC<IStaff> = ({ medStaff }) => {
  return (
    <CenterStaff>
      <span>Our staff: </span>
      <StaffWrapper>
        {medStaff.map(({ userData, direction }) => {
          return (
            <StaffItem key={`${userData.name} + ${userData.lastName}`}>
              <img src={userData.photo || NoAva} alt="doctors avatar" />
              <Information>
                <span>
                  {userData.name} {userData.lastName}
                </span>
                <span>{direction}</span>
              </Information>
            </StaffItem>
          );
        })}
      </StaffWrapper>
    </CenterStaff>
  );
};

export default Staff;
