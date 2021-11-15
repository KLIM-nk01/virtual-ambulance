import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { ContainerName, VisitContainer, ErrorMessage } from './UserVisitStyle';
import VisitItem from './VisitItem.tsx/VisitItem';

const UserVisit: React.FC = () => {
  const { visit } = useTypesSelector((state) => state.profile.profileData);

  return (
    <VisitContainer>
      <ContainerName>My visit</ContainerName>
      {!visit ? (
        <span>
          Please create an appointment with the doctor on the{' '}
          <NavLink to={ROUTS.DOCTORS_PAGE_PATH}>doctor's appointment</NavLink> page.
        </span>
      ) : (
        visit.map((visitItem) => <VisitItem {...visitItem} />)
      )}
    </VisitContainer>
  );
};

export default UserVisit;
