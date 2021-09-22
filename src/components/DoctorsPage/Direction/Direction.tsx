import React from 'react';
import { DirectionWrapper } from './DirectionStyle';

interface IDirection {
  src?: string;
  direction?: string;
}

const Direction: React.FC<IDirection> = ({ direction, src }) => {
  return (
    <DirectionWrapper>
      <img src={src} alt="direction logo" />
      <span>{direction}</span>
    </DirectionWrapper>
  );
};

export default Direction;
