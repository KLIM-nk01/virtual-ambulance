import { Dispatch } from 'redux';
import { IMedcenterData, MedCenterAction, MedCenterActionTypes } from '@store/types/medCentersType';
import axios from 'axios';
import { API_URL } from '@constants/apiUrl';

export const fetchMedCenters = () => {
  return  (dispatch: Dispatch<MedCenterAction>) => {
    dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTERS });

     axios
      .get(API_URL.MEDCENTERS)
      .then((response) => {
        dispatch({ type: MedCenterActionTypes.FETCH_MEDCENTERS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
            payload: 'Failed to get data about medical centers, please try again later.',
          });
        } else if (error.request) {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
            payload: 'The server is not responding',
          });
        } else {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
            payload: 'Error...',
          });
        }
      });
  };
};
