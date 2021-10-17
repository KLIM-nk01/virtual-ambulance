import {
  ActionType,
  IDoctorData,
  IPatientData,
  SignUpActionsType
} from '@store/types/signUp';
import { Dispatch } from 'redux';

export const registrationPatient = (patientData: IPatientData) => {
  return (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: SignUpActionsType.REGISTRATION_REQUEST });
      setTimeout(() => {
        dispatch({
          type: SignUpActionsType.REGISTRATION_PATIENT_SUCCESS,
          patientData: {
            userRole: patientData.userRole,
            name: patientData.name,
            lastName: patientData.lastName,
            birthday: patientData.birthday,
            email: patientData.email,
            phone: patientData.phone,
            address: patientData.address,
            password: patientData.password
          }
        });
      }, 2000);
    } catch (e) {
      dispatch({
        type: SignUpActionsType.REGISTRATION_ERROR,
        errorMessage: 'Registration error'
      });
    }
  };
};

export const registrationDoctor = (doctorData: IDoctorData) => {
  return (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: SignUpActionsType.REGISTRATION_REQUEST });
      setTimeout(() => {
        dispatch({
          type: SignUpActionsType.REGISTRATION_DOCTOR_SUCCESS,
          doctorData: {
            userRole: doctorData.userRole,
            name: doctorData.name,
            lastName: doctorData.lastName,
            email: doctorData.email,
            phone: doctorData.phone,
            experience: doctorData.experience,
            direction: doctorData.direction,
            workPlace: doctorData.workPlace,
            password: doctorData.password
          }
        });
      }, 2000);
    } catch (e) {
      dispatch({
        type: SignUpActionsType.REGISTRATION_ERROR,
        errorMessage: 'Registration error'
      });
    }
  };
};
