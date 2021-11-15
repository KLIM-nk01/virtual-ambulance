import React from 'react';
import { doctorsDirection } from '@data/doctorsDirection';
import { DoctorsPageNavBarWrapper } from './DoctorsPageNavBarStyle';
import Direction from './Direction/Direction';

interface IDoctorsPageNavBarProps {
  setChoiseDirection: any;
  choiseDirection: string[];
}

const DoctorsPageNavBar: React.FC<IDoctorsPageNavBarProps> = ({
  setChoiseDirection,
  choiseDirection,
}) => {
  return (
    <DoctorsPageNavBarWrapper>
      {doctorsDirection.map((directionItem) => {
        return (
          <Direction
            choiseDirection={choiseDirection}
            setChoiseDirection={setChoiseDirection}
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
