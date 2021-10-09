import { Dispatch } from 'redux';
import axios from 'axios';
import { MedCenterAction, MedCenterActionTypes } from '../types/medCentersType';
import { medCenterData } from '@data/medCenterData';

export const fetchMedCenters = () => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    try {
      dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER });
      setTimeout(() => {
        dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER_SUCCESS, payload: medCenterData });
      }, 3000);
    } catch (e) {
      dispatch({
        type: MedCenterActionTypes.FETCH_MEDCENTER_ERROR,
        payload: 'Произошла ошибка при загрузке медцентров',
      });
    }
  };
};
