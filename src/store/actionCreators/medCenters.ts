import { Dispatch } from 'redux';
import { IMedcenterData, MedCenterAction, MedCenterActionTypes } from '@store/types/medCentersType';
import { medCenterData } from '@data/medCenterData';
import axios from 'axios';

export const fetchMedCenters = () => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    try {
      dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER });

      await axios
        .get('http://localhost:3000/medCentersPage')
        .then((response) => {
          dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTER_SUCCESS, payload: response.data });
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      dispatch({
        type: MedCenterActionTypes.FETCH_MEDCENTER_ERROR,
        payload: 'Error loading data.',
      });
    }
  };
};
