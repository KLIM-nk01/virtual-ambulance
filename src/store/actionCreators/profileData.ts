import { Dispatch } from 'redux';
import axios from 'axios';
import * as cookies from '@core/cookies/cookies';
import { API_URL } from '@constants/apiUrl';
import { ProfileAction, ProfileActionTypes } from '@store/types/profileData';
import { ERROR_MESSAGE } from '@constants/errorMessage';
import { USER_ROLE } from '@constants/userRole';

export const fetchProfileData = (userRole: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    dispatch({ type: ProfileActionTypes.FETCH_PROFILE });

    try {
      if (userRole === USER_ROLE.patient) {
        const response = await axios.get(API_URL.PROFILE_PATIENT, {
          headers: { Authorization: `Bearer ${cookies.getCookie('token')}` },
        });

        if (response.data) {
          dispatch({
            type: ProfileActionTypes.FETCH_PROFILE_PATIENT_SUCCESS,
            payload: response.data,
          });
        }
      }
      if (userRole === USER_ROLE.doctor) {
        const response = await axios.get(API_URL.PROFILE_DOCTOR, {
          headers: { Authorization: `Bearer ${cookies.getCookie('token')}` },
        });
  
        if (response.data) {
          dispatch({
            type: ProfileActionTypes.FETCH_PROFILE_DOCTOR_SUCCESS,
            payload: response.data,
          });
        }
      } 
    } catch (error) {
      if (error.response) {
        error.response.status >= 400 &&
          dispatch({
            type: ProfileActionTypes.FETCH_PROFILE_ERROR,
            errorMessage: error.response.data.message,
          });
      } else if (error.request) {
        dispatch({
          type: ProfileActionTypes.FETCH_PROFILE_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};

