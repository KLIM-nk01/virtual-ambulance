import { Dispatch } from 'redux';
import { DoctorsActionType, ActionAction } from '../types/doctorsType';
import { doctorsData } from '@data/doctorsData';

export const fetchDoctors = () => {
  return async (dispatch: Dispatch<ActionAction>) => {
    try {
      dispatch({ type: DoctorsActionType.FETCH_DOCTORS });
      setTimeout(() => {
        dispatch({
          type: DoctorsActionType.FETCH_DOCTORS_SECCESS,
          payload: doctorsData,
        });
      }, 2000);
    } catch (e) {
      dispatch({
        type: DoctorsActionType.FETCH_DOCTORS_ERROR,
        payload: 'Ошибка при загрузке данных',
      });
    }
  };
};
