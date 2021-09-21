import React from 'react';
import Direction from './Direction/Direction';
import { doctorsDirection } from '../../data/doctors/doctorsDirection';
import { DoctorsPageWrapper, DortorsWrapper } from './DoctorsPageStyle';
import { DoctorsPageNavBar } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';

const DoctorsPage: React.FC = () => {
  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar>
        {doctorsDirection.map((directionItem) => {
          return (
            <Direction
              key={Date.now()}
              direction={directionItem.direction}
              src={directionItem.iconSrc}
            />
          );
        })}
      </DoctorsPageNavBar>

      <DortorsWrapper>
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
      </DortorsWrapper>
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
