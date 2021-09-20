import React from 'react';
import Direction from './Direction/Direction';
import { doctorsDirection } from '../../data/doctors/doctorsDirection';
import { DoctorsPageWrapper } from './DoctorsPageStyle';
import { Container } from './DoctorsPageStyle';

const DoctorsPage: React.FC = () => {
  return (
    <DoctorsPageWrapper>
      here will be sentense
      <Container>
        {doctorsDirection.map((directionItem) => {
          return <Direction key={Date.now()} direction={directionItem.direction} src={directionItem.iconSrc} />;
        })}
      </Container>
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
