import { IDoctorsData } from "types/IDoctorData";

export interface IDoctorsState {
  doctors: IDoctorsData[];
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
  payload: IDoctorsData[];
}

interface FetchDoctorsError {
  type: DoctorsActionType.FETCH_DOCTORS_ERROR;
  payload: null | string;
}

export type ActionType = FetchDoctors | FetchDoctorsSuccess | FetchDoctorsError;
