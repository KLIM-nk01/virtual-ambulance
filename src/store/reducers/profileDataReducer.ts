import { IProfile } from './../types/profileData';
import { IInitialProfileData, ProfileAction, ProfileActionTypes } from '@store/types/profileData';

export const InitialState: IInitialProfileData = {
  profileData: {
    name: '',
    lastName: '',
    photo: '',
    phone: '',
    email: '',
    visit: [],
    birthday: '',
    address: '',

    experience: '',
    direction: '',
    workPlace: {
      name: '',
      address: '',
    },
    workTime: [],
    patients: [],
  },
  loading: false,
  error: '',
};

export const profileReducer = (
  state = InitialState,
  action: ProfileAction
): IInitialProfileData => {
  switch (action.type) {
    case ProfileActionTypes.FETCH_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case ProfileActionTypes.FETCH_PROFILE_ERROR: {
      return {
        ...state,
        error: action.errorMessage,
      };
    }
    case ProfileActionTypes.FETCH_PROFILE_PATIENT_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        loading: false,
      };
    case ProfileActionTypes.FETCH_PROFILE_DOCTOR_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        loading: false,
      };
    case ProfileActionTypes.PROFILE_DOCTOR_ADD_TIME:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          workTime: [...state.profileData.workTime, action.payload],
        },
        loading: false,
      };
    case ProfileActionTypes.PROFILE_DOCTOR_DELETE_TIME:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          workTime: state.profileData.workTime.filter((time) => time._id !== action.payload),
        },
        loading: false,
      };

    case ProfileActionTypes.PROFILE_PATIENT_ADD_APPOINTMENT: {
      return {
        ...state,
        profileData: {
          ...state.profileData,
          visit: [...state.profileData.visit, action.payload],
        },
        loading: false,
        error: '',
      };
    }
    case ProfileActionTypes.PROFILE_PATIENT_DELETE_APPOINTMENT: {
      return {
        ...state,
        profileData: {
          ...state.profileData,
          visit: state.profileData.visit.filter(
            (appointment) => appointment._idDate !== action.payload
          ),
        },
        loading: false,
        error: '',
      };
    }
    default:
      return state;
  }
};
