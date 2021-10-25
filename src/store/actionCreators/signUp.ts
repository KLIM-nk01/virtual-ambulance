import { ActionType, IDoctorData, IPatientData, SignUpActionsType } from '@store/types/signUp';
import axios from 'axios';
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
            password: patientData.password,
            photo: ""
          },
        });
      }, 2000);
    } catch (e) {
      dispatch({
        type: SignUpActionsType.REGISTRATION_ERROR,
        errorMessage: 'Registration error',
      });
    }

    // axios
    //   .post('http://localhost:3000/registration/user', {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     ...patientData,
    //   })
    //   .then((response) => {
    //     response.status >= 200 &&
    //       dispatch({
    //         type: SignUpActionsType.REGISTRATION_PATIENT_SUCCESS,
    //       });
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       error.response.status === 400 &&
    //         dispatch({
    //           type: SignUpActionsType.REGISTRATION_ERROR,
    //           errorMessage: error.response.data.message,
    //         });
    //     } else if (error.request) {
    //       dispatch({
    //         type: SignUpActionsType.REGISTRATION_ERROR,
    //         errorMessage: 'The server is not responding',
    //       });
    //     } else {
    //       dispatch({
    //         type: SignUpActionsType.REGISTRATION_ERROR,
    //         errorMessage: 'Error...',
    //       });
    //     }
    //   });
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
            password: doctorData.password,
          },
        });
      }, 2000);
    } catch (e) {
      dispatch({
        type: SignUpActionsType.REGISTRATION_ERROR,
        errorMessage: 'Registration error',
      });
    }
  };
};
