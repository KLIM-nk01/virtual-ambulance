export interface IDoctorWorkTime {
  date: string;
  time: string;
  _id: string;
}
export interface IProfile {
  name?: string;
  lastName?: string;
  photo?: string;
  phone?: string;
  email?: string;

  visit?: {}[];
  birthday?: string;
  address?: string;

  experience?: string;
  direction?: string;
  workPlace?: {
    name: string;
    address: string;
  };
  workTime: IDoctorWorkTime[];
  patients?: {}[];
}

export interface IInitialProfileData {
  profileData: IProfile;
  loading: boolean;
  error: string;
}

export enum ProfileActionTypes {
  FETCH_PROFILE = 'FETCH_PROFILE',
  FETCH_PROFILE_PATIENT_SUCCESS = 'FETCH_PROFILE_PATIENT_SUCCESS',
  FETCH_PROFILE_DOCTOR_SUCCESS = 'FETCH_PROFILE_DOCTOR_SUCCESS',
  FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
  PROFILE_DOCTOR_ADD_TIME = 'PROFILE_DOCTOR_ADD_TIME',
  PROFILE_DOCTOR_DELETE_TIME = 'PROFILE_DOCTOR_DELETE_TIME',
}
interface FetchProfile {
  type: ProfileActionTypes.FETCH_PROFILE;
}

interface FetchProfilePatientSuccess {
  type: ProfileActionTypes.FETCH_PROFILE_PATIENT_SUCCESS;
  payload: IProfile;
}

interface FetchProfileDoctorSuccess {
  type: ProfileActionTypes.FETCH_PROFILE_DOCTOR_SUCCESS;
  payload: IProfile;
}

interface FetchProfileError {
  type: ProfileActionTypes.FETCH_PROFILE_ERROR;
  errorMessage: string;
}

interface ProfileDoctorAddTime {
  type: ProfileActionTypes.PROFILE_DOCTOR_ADD_TIME;
  payload: IDoctorWorkTime;
}
interface ProfileDoctorDeleteTime {
  type: ProfileActionTypes.PROFILE_DOCTOR_DELETE_TIME;
  payload: string;
}

export type ProfileAction =
  | FetchProfileError
  | FetchProfileDoctorSuccess
  | FetchProfilePatientSuccess
  | FetchProfile
  | ProfileDoctorAddTime
  | ProfileDoctorDeleteTime;
