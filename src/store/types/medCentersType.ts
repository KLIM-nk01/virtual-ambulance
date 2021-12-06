export interface IMedStaff {
  userData: {
    name: string;
    lastName: string;
    photo: string;
  };
  direction: string;
}

export interface IMedCenterData {
  _id: string;
  name: string;
  address: string;
  photo: string;
  description: string;
  services: string[];
  medStaff: IMedStaff[];
  location: {
    lat: number;
    lon: number;
  };
}

export interface INewMedCenterData {
  _id?: string;
  name: string;
  address: string;
  photo: string;
  description: string;
  services: string[];
}

export interface IMedCenterState {
  medCenters: IMedCenterData[];
  loading: boolean;
  error: null | string;
}

export enum MedCenterActionTypes {
  FETCH_MEDCENTERS = 'FETCH_MEDCENTERS',
  FETCH_MEDCENTERS_SUCCESS = 'FETCH_MEDCENTERS_SUCCESS',
  FETCH_MEDCENTERS_ERROR = 'FETCH_MEDCENTERS_ERROR',
  FETCH_MEDCENTER = 'FETCH_MEDCENTER',
  CREATE_NEW_MEDCENTER = 'CREATE_NEW_MEDCENTER',
  CREATE_NEW_MEDCENTER_SUCCESS = 'CREATE_NEW_MEDCENTER_SUCCESS',
  CREATE_NEW_MEDCENTER_ERROR = 'CREATE_NEW_MEDCENTER_ERROR',
  DELETE_MEDCENTER = 'DELETE_MEDCENTER',
  EDIT_MEDCENTER = 'EDIT_MEDCENTER',
  EDIT_MEDCENTER_SUCCESS = 'EDIT_MEDCENTER_SUCCESS',
  EDIT_MEDCENTER_ERROR = 'EDIT_MEDCENTER_ERROR',
}
interface FetchMedCenters {
  type: MedCenterActionTypes.FETCH_MEDCENTERS;
}

interface FetchMedCenterWithId {
  type: MedCenterActionTypes.FETCH_MEDCENTER;
  payload: IMedCenterData[];
}

interface FetchMedCentersSuccess {
  type: MedCenterActionTypes.FETCH_MEDCENTERS_SUCCESS;
  payload: IMedCenterData[];
}

interface FetchMedCentersError {
  type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR;
  errorMessage: string;
}

interface CreateNewMedCenter {
  type: MedCenterActionTypes.CREATE_NEW_MEDCENTER;
}

interface CreateNewMedCenterSuccess {
  type: MedCenterActionTypes.CREATE_NEW_MEDCENTER_SUCCESS;
  payload: IMedCenterData;
}

interface CreateNewMedCenterError {
  type: MedCenterActionTypes.CREATE_NEW_MEDCENTER_ERROR;
  errorMessage: string;
}

interface DeleteMedCenter {
  type: MedCenterActionTypes.DELETE_MEDCENTER;
  payload: string;
}

interface EditMedCenter {
  type: MedCenterActionTypes.EDIT_MEDCENTER;
}
interface EditMedCenterSuccess {
  type: MedCenterActionTypes.EDIT_MEDCENTER_SUCCESS;
}
interface EditMedCenterError {
  type: MedCenterActionTypes.EDIT_MEDCENTER_ERROR;
  errorMessage: string;
}

export type MedCenterAction =
  | FetchMedCenters
  | FetchMedCentersSuccess
  | FetchMedCentersError
  | CreateNewMedCenter
  | CreateNewMedCenterSuccess
  | CreateNewMedCenterError
  | DeleteMedCenter
  | FetchMedCenterWithId
  | EditMedCenter
  | EditMedCenterSuccess
  | EditMedCenterError;
