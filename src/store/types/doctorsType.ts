import { IDoctorsData } from "types/IDoctorData";

export interface IDoctorsState {
  doctors: {
    _id: string,
    experience: string,
    direction: string,
    description: string,
  
    workTime: { date: string; time: string }[],
    userData: {
      name: string;
      lastName: string;
      photo: string;
    }
  }[]
    
  loading: boolean;
  error: null | string;
}

export enum DoctorsActionType {
  FETCH_DOCTORS = 'FETCH_DOCTORS',
  FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS',
  FETCH_DOCTORS_ERROR = 'FETCH_DOCTORS_ERROR',
}

interface FetchDoctors {
  type: DoctorsActionType.FETCH_DOCTORS;
}

interface FetchDoctorsSuccess {
  type: DoctorsActionType.FETCH_DOCTORS_SUCCESS;
  payload: [];
}

interface FetchDoctorsError {
  type: DoctorsActionType.FETCH_DOCTORS_ERROR;
  errorMessage: null | string;
}

export type ActionType = FetchDoctors | FetchDoctorsSuccess | FetchDoctorsError;
