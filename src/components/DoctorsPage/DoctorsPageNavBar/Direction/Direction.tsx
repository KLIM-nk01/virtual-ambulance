import React, { useMemo, useReducer } from 'react';
import { DirectionActionType, IDirection, IDirectionInitialState } from './types';
import { directionReducer } from './directionReducer';
import { DirectionWrapper } from './DirectionStyle';

const initialState: IDirectionInitialState = {
  enableDirection: false,
  allDoctors: false,
};

const Direction: React.FC<IDirection> = ({
  direction,
  src,
  setChoiseDirection,
  choiseDirection,
}) => {
  const [directionState, dispatchLock] = useReducer(directionReducer, initialState);

  const clickDirection = () => {
    dispatchLock({ type: DirectionActionType.SET_ENABLE_DIRECTION });
    choiseDirection.indexOf(direction) > -1
      ? setChoiseDirection(choiseDirection.filter((direc) => direc !== direction))
      : setChoiseDirection([...choiseDirection, direction]);
  };

  useMemo(
    () =>
      direction === 'All Doctors' &&
      (dispatchLock({ type: DirectionActionType.SET_ALL_DOCTORS_DIRECTION }),
      dispatchLock({ type: DirectionActionType.SET_ENABLE_DIRECTION })),
    [direction]
  );

  return (
    <DirectionWrapper
      allDoctors={directionState.allDoctors}
      enable={directionState.enableDirection}
      onClick={() => clickDirection()}
    >
      <img src={src} alt="direction logo" />
      <span>{direction}</span>
    </DirectionWrapper>
  );
};

export default Direction;
