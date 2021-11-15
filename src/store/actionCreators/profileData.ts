import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
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

export const profileDoctorAddDate = (date: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    
    try {
      const response: AxiosResponse<{ date: string; time: string; idWorkTime: string }> =
        await axios.put(
          API_URL.PROFILE_DOCTOR_ADD_DATE,
          {
            date,
          },
          {
            headers: { Authorization: `Bearer ${cookies.getCookie('token')}` },
          }
        );
      if (response.data) {
        dispatch({
          type: ProfileActionTypes.PROFILE_DOCTOR_ADD_TIME,
          payload: response.data,
        });
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

export const profileDoctorDelete = (idDate: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {

    try {
      const response = await axios.delete(`${API_URL.PROFILE_DOCTOR_DELETE_DATE}/${idDate}`, {
        data: idDate,
        headers: { Authorization: `Bearer ${cookies.getCookie('token')}` },
      });
      if (response.data) {
        dispatch({ type: ProfileActionTypes.PROFILE_DOCTOR_DELETE_TIME, payload: response.data });
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

export const profilePatientAddAppointment = (idDate: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    // dispatch({ type: ProfileActionTypes.FETCH_PROFILE });
    dispatch({
      type: ProfileActionTypes.FETCH_PROFILE_ERROR,
      errorMessage: '',
    });

    try {
      const response: AxiosResponse<{
        doctorName: string;
        doctorLastName: string;
        doctorDirection: string;
        medCenterName: string;
        medCenterAddress: string;
        date: string;
        time: string;
        _idDate: string;
      }> = await axios.put(
        API_URL.PROFILE_PATIENT_ADD_APPOINTMENT,
        {
          data: idDate,
        },
        {
          headers: { Authorization: `Bearer ${cookies.getCookie('token')}` },
        }
      );
      if (response) {
        dispatch({
          type: ProfileActionTypes.PROFILE_PATIENT_ADD_APPOINTMENT,
          payload: response.data,
        });
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

export const profilePatientDeleteAppointment = (idDate: string) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      const response = await axios.delete(
        `${API_URL.PROFILE_PATIENT_DELETE_APPOINTMENT}/${idDate}`,
        {
          data: idDate,
          headers: { Authorization: `Bearer ${cookies.getCookie('token')}` },
        }
      );
      if (response.data) {
        dispatch({
          type: ProfileActionTypes.PROFILE_PATIENT_DELETE_APPOINTMENT,
          payload: response.data,
        });
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
