export interface IProfileData {
  userData: {
    name: string;
    lastName: string;
    photo: string;
    phone: string;
    email: string;
  };
  experience?: string;
  direction?: string;
  workPlace?: {
    name: string;
    address: string;
  };
  patients?: {
    idPatient: string;
    name: string;
    lastName: string;
    photo: string;
  }[];
  workTime?: { date: string; time: string }[];
  visit?: {}[];
  birthday?: string;
  address?: string;
}

export interface IInitialProfileData {
  profileData: {} | null;
  loading: boolean;
  error: string;
}

export enum ProfileActionTypes {
  FETCH_PROFILE = 'FETCH_PROFILE',
  FETCH_PROFILE_PATIENT_SUCCESS = 'FETCH_PROFILE_PATIENT_SUCCESS',
  FETCH_PROFILE_DOCTOR_SUCCESS = 'FETCH_PROFILE_DOCTOR_SUCCESS',
  FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
}
interface FetchProfile {
  type: ProfileActionTypes.FETCH_PROFILE;
}

interface FetchProfilePatientSuccess {
  type: ProfileActionTypes.FETCH_PROFILE_PATIENT_SUCCESS;
  payload: {
    userData: {
      name: string;
      lastName: string;
      photo: string;
      phone: string;
      email: string;
    };
    visit?: {}[];
    birthday?: string;
    address?: string;
  };
}

interface FetchProfileDoctorSuccess {
  type: ProfileActionTypes.FETCH_PROFILE_DOCTOR_SUCCESS;
  payload: {
    userData: {
      name: string;
      lastName: string;
      photo: string;
      phone: string;
      email: string;
    };
    experience?: string;
    direction?: string;
    workPlace?: {
      name: string;
      address: string;
    };
    patients?: {
      idPatient: string;
      name: string;
      lastName: string;
      photo: string;
    }[];
    workTime?: { date: string; time: string }[];
  };
}

interface FetchProfileError {
  type: ProfileActionTypes.FETCH_PROFILE_ERROR;
  errorMessage: string;
}

export type ProfileAction =
  | FetchProfileError
  | FetchProfileDoctorSuccess
  | FetchProfilePatientSuccess
  | FetchProfile;
