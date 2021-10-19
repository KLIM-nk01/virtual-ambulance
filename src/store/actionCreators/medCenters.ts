import { Dispatch } from 'redux';
import { MedCenterAction, MedCenterActionTypes } from '@store/types/medCentersType';
import { medCenterData } from '@data/medCenterData';

export const fetchMedCenters = () => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    try {
      dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER });
      setTimeout(() => {
        dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER_SUCCESS, payload: medCenterData });
      }, 1000);
    } catch (e) {
      dispatch({
        type: MedCenterActionTypes.FETCH_MEDCENTER_ERROR,
        payload: 'Error loading data.',
      });
    }
  };
};
