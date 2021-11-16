import React from 'react';
import { doctorsDirection } from '@data/doctorsDirection';
import { DoctorsPageNavBarWrapper } from './DoctorsPageNavBarStyle';
import Direction from './Direction/Direction';

interface IDoctorsPageNavBarProps {
  setSelectedDirection: any;
  selectedDirection: string[];
}

const DoctorsPageNavBar: React.FC<IDoctorsPageNavBarProps> = ({
  setSelectedDirection,
  selectedDirection,
}) => {
  return (
    <DoctorsPageNavBarWrapper>
      {doctorsDirection.map((directionItem) => {
        return (
          <Direction
            selectedDirection={selectedDirection}
            setSelectedDirection={setSelectedDirection}
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
