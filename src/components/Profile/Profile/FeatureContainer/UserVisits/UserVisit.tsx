import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import { ContainerName, VisitContainer } from './UserVisitStyle';
import VisitItem from './VisitItem.tsx/VisitItem';

const UserVisit: React.FC = () => {
  const { visit } = useTypesSelector((state) => state.profile.profileData);
  console.log(visit);

  return (
    <VisitContainer>
      <ContainerName>назначеные приемы</ContainerName>
      {!visit?.length ? (
        <span>
          Вы можете записаться на прием к врачу на странице
          <NavLink to={ROUTS.DOCTORS_PAGE_PATH}> Медперсонал.</NavLink>
        </span>
      ) : (
        visit.map((visitItem) => <VisitItem key={visitItem._idDate} {...visitItem} />)
      )}
    </VisitContainer>
  );
};

export default UserVisit;
