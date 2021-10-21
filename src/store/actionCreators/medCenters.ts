import { Dispatch } from 'redux';
import { IMedcenterData, MedCenterAction, MedCenterActionTypes } from '@store/types/medCentersType';
import { medCenterData } from '@data/medCenterData';
import axios from 'axios';

export const fetchMedCenters = () => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER });

    await axios
      .get('http://localhost:3000/medCentersPage')
      .then((response) => {
        dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTER_ERROR,
            payload: 'Failed to get data about medical centers, please try again later.',
          });
        } else if (error.request) {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTER_ERROR,
            payload: 'The server is not responding',
          });
        } else {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTER_ERROR,
            payload: 'Error...',
          });
        }
      });
  };
};
