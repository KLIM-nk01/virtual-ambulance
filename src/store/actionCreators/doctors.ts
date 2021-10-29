import { Dispatch } from 'redux';
import axios from 'axios';
import { DoctorsActionType, ActionType } from '@store/types/doctorsType';

export const fetchDoctors = () => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({ type: DoctorsActionType.FETCH_DOCTORS });

    axios
      .get('http://localhost:3000/doctors')
      .then((response) => {
        dispatch({
          type: DoctorsActionType.FETCH_DOCTORS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          dispatch({
            type: DoctorsActionType.FETCH_DOCTORS_ERROR,
            payload: 'Failed to get data about doctors, please try again later.',
          });
        } else if (error.request) {
          dispatch({
            type: DoctorsActionType.FETCH_DOCTORS_ERROR,
            payload: 'The server is not responding',
          });
        } else {
          dispatch({
            type: DoctorsActionType.FETCH_DOCTORS_ERROR,
            payload: 'Error...',
          });
        }
      });
  };
};
