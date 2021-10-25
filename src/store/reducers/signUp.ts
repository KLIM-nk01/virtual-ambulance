import { SignUpActionsType } from '@store/types/signUp';
import { ActionType, ISignUpInitialState } from '@store/types/signUp';

const SignUpInitialState: ISignUpInitialState = {
  requestLoading: false,
  doctorsData: null,
  patientData: null,
  isRegistered: false,
  requestError: '',
};

export const signUpReducer = (
  state = SignUpInitialState,
  action: ActionType
): ISignUpInitialState => {
  switch (action.type) {
    case SignUpActionsType.REGISTRATION_REQUEST:
      return { ...state, requestLoading: true };

    case SignUpActionsType.REGISTRATION_PATIENT_SUCCESS:
      return {
        ...state,
        requestLoading: false,
        patientData: action.patientData,
      };
    case SignUpActionsType.REGISTRATION_DOCTOR_SUCCESS:
      return {
        ...state,
        requestLoading: false,
        doctorsData: action.doctorData,
      };
    case SignUpActionsType.REGISTRATION_ERROR:
      return {
        ...state,
        requestLoading: false,
        requestError: action.errorMessage,
      };
    default:
      return state;
  }
};
