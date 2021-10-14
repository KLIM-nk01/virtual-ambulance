import { Dispatch } from 'redux';
import { DoctorsActionType, ActionType } from '@store/types/doctorsType';
import { doctorsData } from '@data/doctorsData';

export const fetchDoctors = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: DoctorsActionType.FETCH_DOCTORS });
      setTimeout(() => {
        dispatch({
          type: DoctorsActionType.FETCH_DOCTORS_SECCESS,
          payload: doctorsData
        });
      }, 1000);
    } catch (e) {
      dispatch({
        type: DoctorsActionType.FETCH_DOCTORS_ERROR,
        payload: 'Error loading data about doctors.'
      });
    }
  };
};
