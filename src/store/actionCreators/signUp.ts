import { ActionsType, AuthActionsType } from '@store/types/authUser';
import {
  ActionType,
  IDoctorData,
  IPatientData,
  SignUpActionsType,
  IUserData,
} from '@store/types/signUp';
import axios from 'axios';
import { Dispatch } from 'redux';
import * as cookies from '@core/cookies/cookies';

export const registrationUser = (userData: any) => {
  return (dispatch: Dispatch<ActionType | AuthActionsType>) => {
    dispatch({ type: SignUpActionsType.REGISTRATION_REQUEST });

    axios
      .post('http://localhost:3000/registration/user', {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...userData,
      })
      .then((response) => {
        response.status >= 200 &&
          dispatch({
            type: SignUpActionsType.REGISTRATION_USER_SUCCESS,
          });
        dispatch({
          type: ActionsType.USER_IS_AUTH,
          payload: {
            id: response.data.user.id,
            userRole: response.data.user.userRole,
            name: response.data.user.name,
          },
        });
        cookies.setCookie('id', response.data.user.id, {});
        cookies.setCookie('userRole', response.data.user.userRole, {});
        cookies.setCookie('token', response.data.token, {});
      })
      .catch((error) => {
        if (error.response) {
          error.response.status >= 400 &&
            dispatch({
              type: SignUpActionsType.REGISTRATION_ERROR,
              errorMessage: error.response.data.message,
            });
        } else if (error.request) {
          dispatch({
            type: SignUpActionsType.REGISTRATION_ERROR,
            errorMessage: 'The server is not responding',
          });
        } else {
          dispatch({
            type: SignUpActionsType.REGISTRATION_ERROR,
            errorMessage: 'Error...',
          });
        }
      });
  };
};
