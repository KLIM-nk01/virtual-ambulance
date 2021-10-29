export interface IMedcenterData {
  id_medcenter: string;
  name: string;
  address: string;
  photo: string;
  description: string;
  services: string[];
  medStaff: string[];
  location: {
    lat: number;
    lon: number;
  };
}

export interface IMedCenterState {
  medCenters: IMedcenterData[];
  loading: boolean;
  error: null | string;
}

export enum MedCenterActionTypes {
  FETCH_MEDCENTERS = 'FETCH_MEDCENTERS',
  FETCH_MEDCENTERS_SUCCESS = 'FETCH_MEDCENTERS_SUCCESS',
  FETCH_MEDCENTERS_ERROR = 'FETCH_MEDCENTERS_ERROR',
}
interface FeetchMedCenter {
  type: MedCenterActionTypes.FETCH_MEDCENTERS;
}

interface FeetchMedCenterSuccess {
  type: MedCenterActionTypes.FETCH_MEDCENTERS_SUCCESS;
  payload: IMedcenterData[];
}

interface FeetchMedCenterError {
  type: MedCenterActionTypes.FETCH_MEDCENTERS_ERROR;
  errorMessage: string;
}

export type MedCenterAction = FeetchMedCenter | FeetchMedCenterSuccess | FeetchMedCenterError;
