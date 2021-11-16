import React, { useMemo, useReducer } from 'react';
import { DirectionActionType, IDirectionInitialState } from './types';
import { directionReducer } from './directionReducer';
import { DirectionWrapper } from './DirectionStyle';

export interface IDirection {
  src?: string;
  direction: string;
  setSelectedDirection: any;
  selectedDirection: string[];
}

const initialState: IDirectionInitialState = {
  enableDirection: false,
  allDoctors: false,
};

const Direction: React.FC<IDirection> = ({
  direction,
  src,
  setSelectedDirection,
  selectedDirection,
}) => {
  const [directionState, setDirectionState] = useReducer(directionReducer, initialState);

  const clickDirection = () => {
    setDirectionState({ type: DirectionActionType.SET_ENABLE_DIRECTION });
    selectedDirection.indexOf(direction) > -1
      ? setSelectedDirection(selectedDirection.filter((direc) => direc !== direction))
      : setSelectedDirection([...selectedDirection, direction]);
  };

  useMemo(
    () =>
      direction === 'All Doctors' &&
      (setDirectionState({ type: DirectionActionType.SET_ALL_DOCTORS_DIRECTION }),
      setDirectionState({ type: DirectionActionType.SET_ENABLE_DIRECTION })),
    [direction]
  );

  return (
    <DirectionWrapper
      allDoctors={directionState.allDoctors}
      enable={directionState.enableDirection}
      onClick={clickDirection}
    >
      <img src={src} alt="direction logo" />
      <span>{direction}</span>
    </DirectionWrapper>
  );
};

export default Direction;
