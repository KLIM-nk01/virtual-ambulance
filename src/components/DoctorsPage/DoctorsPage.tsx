import React from 'react';
import Direction from './Direction/Direction';
import { doctorsDirection } from '@data/doctors/doctorsDirection';
import { DoctorsPageWrapper, DortorsWrapper } from './DoctorsPageStyle';
import { DoctorsPageNavBar } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import Page from '@components/Page/Page';

const DoctorsPage: React.FC = () => {
  return (
    <Page>
      <DoctorsPageNavBar>
        {doctorsDirection.map((directionItem) => {
          return (
            <Direction
              key={directionItem.direction}
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
    </Page>
  );
};

export default DoctorsPage;
