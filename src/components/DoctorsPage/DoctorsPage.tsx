import React from 'react';
import { DoctorsPageWrapper, DortorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';

const DoctorsPage: React.FC = () => {
  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar />

      <DortorsWrapper>
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
      </DortorsWrapper>
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
