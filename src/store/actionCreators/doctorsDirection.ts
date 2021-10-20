import { doctorsDirection } from '@data/doctorsDirection';
import {
  DirectionActionsType,
  DirectionActionType
} from '@store/types/doctorsDirection';
import { Dispatch } from 'redux';

export const fetchDoctorsDirection = () => {
  return async (dispatch: Dispatch<DirectionActionsType>) => {
    try {
      dispatch({ type: DirectionActionType.FETCH_DIRECTION });
      setTimeout(() => {
        dispatch({
          type: DirectionActionType.FETCH_DIRECTION_SUCCESS,
          payload: doctorsDirection
        });
      }, 1000);
    } catch (e) {
      dispatch({
        type: DirectionActionType.FETCH_DIRECTION_ERROR,
        payload: 'Error loading data.'
      });
    }
  };
};
