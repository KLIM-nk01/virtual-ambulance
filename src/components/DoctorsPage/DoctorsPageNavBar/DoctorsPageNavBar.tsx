import React from 'react';
import { DoctorsPageNavBarWrapper } from './DoctorsPageNavBarStyle';
import { doctorsDirection } from '@data/doctorsDirection';
import Direction from './Direction/Direction';

const DoctorsPageNavBar = () => {
    return (
        <DoctorsPageNavBarWrapper>
        {doctorsDirection.map((directionItem) => {
          return (
            <Direction
              key={directionItem.direction}
              direction={directionItem.direction}
              src={directionItem.iconSrc}
            />
          );
        })}
      </DoctorsPageNavBarWrapper>
    );
};

export default DoctorsPageNavBar;