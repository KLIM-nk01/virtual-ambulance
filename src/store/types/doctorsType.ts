export interface IDoctorsState {
    doctors: any[];
    loading: boolean;
    error: null | string;
  }
  
 export  enum DoctorsActionType {
    FETCH_DOCTORS = 'FETCH_DOCTORS',
    FETCH_DOCTORS_SECCESS = 'FETCH_DOCTORS_SECCESS',
    FETCH_DOCTORS_ERROR = 'FETCH_DOCTORS_ERROR',
  }
  
  interface FetchDoctors {
    type: DoctorsActionType.FETCH_DOCTORS;
  }
  
  interface FetchDoctorsSeccess {
    type: DoctorsActionType.FETCH_DOCTORS_SECCESS;
    payload: any[];
  }
  
  interface FetchDoctorsError {
    type: DoctorsActionType.FETCH_DOCTORS_ERROR;
    payload: null | string;
  }
  
  export type ActionAction = FetchDoctors | FetchDoctorsSeccess | FetchDoctorsError;