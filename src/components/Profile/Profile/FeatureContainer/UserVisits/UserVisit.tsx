import React from 'react';
import { ContainerName, VisitContainer } from './UserVisitStyle';
import VisitItem from './VisitItem.tsx/VisitItem';

const UserVisit: React.FC = () => {
  return (
    <VisitContainer>
      <ContainerName>My visit</ContainerName>
      <VisitItem />
      <VisitItem />
      <VisitItem />
    </VisitContainer>
  );
};

export default UserVisit;
