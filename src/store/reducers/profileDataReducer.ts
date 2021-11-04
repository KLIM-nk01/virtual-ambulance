import { IInitialProfileData, ProfileAction, ProfileActionTypes } from '@store/types/profileData';

export const InitialState: IInitialProfileData = {
  profileData: null,
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
    case ProfileActionTypes.FETCH_PROFILE_ERROR: {
      return {
        ...state,
        error: action.errorMessage,
      };
    }
    default:
      return state;
  }
};
