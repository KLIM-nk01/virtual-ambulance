import React, { useMemo, useState } from 'react';
import { DirectionWrapper } from './DirectionStyle';

interface IDirection {
  src?: string;
  direction: string;
  setChoiseDirection: (value: string) => void;
  choiseDirection: string;
}

const Direction: React.FC<IDirection> = ({
  direction,
  src,
  setChoiseDirection,
  choiseDirection,
}) => {
  const [enable, setEnable] = useState<boolean>(false);

  const clickDirection = () => {
    setEnable(!enable),
      choiseDirection === direction
        ? setChoiseDirection('All Doctors')
        : setChoiseDirection(direction);
  };
  useMemo(() => direction === 'All Doctors' && setEnable(!enable), [direction]);

  return (
    <DirectionWrapper enable={enable} onClick={() => clickDirection()}>
      <img src={src} alt="direction logo" />
      <span>{direction}</span>
    </DirectionWrapper>
  );
};

export default Direction;
