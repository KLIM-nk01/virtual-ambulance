import { IDoctorsData } from "types/IDoctorData";

export interface IDoctorsState {
  doctors: IDoctorsData[];
  loading: boolean;
  error: null | string;
}

export enum DoctorsActionType {
  FETCH_DOCTORS = 'FETCH_DOCTORS',
  FETCH_DOCTORS_SECCESS = 'FETCH_DOCTORS_SECCESS',
  FETCH_DOCTORS_ERROR = 'FETCH_DOCTORS_ERROR',
}

interface FetchDoctors {
  type: DoctorsActionType.FETCH_DOCTORS;
}

interface FetchDoctorsSeccess {
  type: DoctorsActionType.FETCH_DOCTORS_SECCESS;
  payload: IDoctorsData[];
}

interface FetchDoctorsError {
  type: DoctorsActionType.FETCH_DOCTORS_ERROR;
  payload: null | string;
}

export type ActionType = FetchDoctors | FetchDoctorsSeccess | FetchDoctorsError;
