import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import {
  IMedCenterData,
  INewMedCenterData,
  MedCenterAction,
  MedCenterActionTypes,
} from '@store/types/medCentersType';
import { API_URL } from '@constants/apiUrl';
import { ERROR_MESSAGE } from '@constants/errorMessage';

export const fetchMedCenters = () => {
  return (dispatch: Dispatch<MedCenterAction>) => {
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
            errorMessage: ERROR_MESSAGE.FAILED_DATA_LOAD,
          });
        } else if (error.request) {
          dispatch({
            type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
            errorMessage: ERROR_MESSAGE.SERVER_ERROR,
          });
        }
      });
  };
};

export const fetchMedCenterWithId = (idMedCenter: string) => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    try {
      const response: AxiosResponse<IMedCenterData[]> = await axios.get(
        `${API_URL.MEDCENTERS}/${idMedCenter}`
      );

      response.status >= 200 &&
        dispatch({
          type: MedCenterActionTypes.FETCH_MEDCENTER,
          payload: response.data,
        });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
          errorMessage: ERROR_MESSAGE.FAILED_DATA_LOAD,
        });
      } else if (error.request) {
        dispatch({
          type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};

export const createNewMedCenter = (medCenterData: { [key: string]: string; photo: any }) => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    dispatch({ type: MedCenterActionTypes.CREATE_NEW_MEDCENTER });

    const form = new FormData();
    const arr = Object.keys(medCenterData);

    arr.forEach((el) => {
      if (el === 'photo') form.append(el, medCenterData[el][0]);
      else {
        form.append(el, medCenterData[el]);
      }
    });

    try {
      const response: AxiosResponse<{ message: string }> = await axios.post(
        API_URL.CREATE_NEW_MEDCENTER,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      response.status >= 200 &&
        dispatch({
          type: MedCenterActionTypes.CREATE_NEW_MEDCENTER_SUCCESS,
          payload: response.data.message,
        });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: MedCenterActionTypes.CREATE_NEW_MEDCENTER_ERROR,
          errorMessage: ERROR_MESSAGE.FAILED_DATA_LOAD,
        });
      } else if (error.request) {
        dispatch({
          type: MedCenterActionTypes.CREATE_NEW_MEDCENTER_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};

export const medCenterDelete = (idMedCenter: string) => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    try {
      const response = await axios.delete(`${API_URL.DELETE_MEDCENTER}/${idMedCenter}`, {
        data: idMedCenter,
        withCredentials: true,
      });

      if (response.data) {
        dispatch({
          type: MedCenterActionTypes.DELETE_MEDCENTER,
          payload: response.data,
        });
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: MedCenterActionTypes.CREATE_NEW_MEDCENTER_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      } else if (error.request) {
        dispatch({
          type: MedCenterActionTypes.CREATE_NEW_MEDCENTER_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};

export const editMedCenter = (medCenterData: { [key: string]: string; photo: any }) => {
  return async (dispatch: Dispatch<MedCenterAction>) => {
    dispatch({ type: MedCenterActionTypes.EDIT_MEDCENTER });

    const form = new FormData();
    const arr = Object.keys(medCenterData);

    arr.forEach((el) => {
      if (el === 'photo') form.append(el, medCenterData[el][0]);
      else {
        form.append(el, medCenterData[el]);
      }
    });

    try {
      const response: AxiosResponse<{ message: string }> = await axios.patch(
        API_URL.EDIT_MEDCENTER,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      if (response.status >= 200) {
        dispatch({
          type: MedCenterActionTypes.EDIT_MEDCENTER_SUCCESS,
          payload: response.data.message,
        });
      }
    } catch (error) {
      if (error.response) {
        dispatch({
          type: MedCenterActionTypes.EDIT_MEDCENTER_ERROR,
          errorMessage: ERROR_MESSAGE.FAILED_DATA_LOAD,
        });
      } else if (error.request) {
        dispatch({
          type: MedCenterActionTypes.EDIT_MEDCENTER_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};
