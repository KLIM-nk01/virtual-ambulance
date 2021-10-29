import { Dispatch } from 'redux';
import axios from 'axios';
import { DoctorsActionType, ActionType } from '@store/types/doctorsType';
import { ERROR_MESSAGE } from '@constants/errorMessage';
import { API_URL } from '@constants/apiUrl';

export const fetchDoctors = () => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({ type: DoctorsActionType.FETCH_DOCTORS });

    axios
      .get(API_URL.DOCTORS)
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
            errorMessage: ERROR_MESSAGE.FAILED_DATA_LOAD,
          });
        } else if (error.request) {
          dispatch({
            type: DoctorsActionType.FETCH_DOCTORS_ERROR,
            errorMessage: ERROR_MESSAGE.SERVER_ERROR,
          });
        }
      });
  };
};
