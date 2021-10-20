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
  FETCH_MEDCENTER = 'FETCH_MEDCENTER',
  FETCH_MEDCENTER_SUCCESS = 'FETCH_MEDCENTER_SUCCESS',
  FETCH_MEDCENTER_ERROR = 'FETCH_MEDCENTER_ERROR',
}
interface FeetchMedCenter {
  type: MedCenterActionTypes.FETCH_MEDCENTER;
}

interface FeetchMedCenterSuccess {
  type: MedCenterActionTypes.FETCH_MEDCENTER_SUCCESS;
  payload: IMedcenterData[];
}

interface FeetchMedCenterError {
  type: MedCenterActionTypes.FETCH_MEDCENTER_ERROR;
  payload: string;
}

export type MedCenterAction = FeetchMedCenter | FeetchMedCenterSuccess | FeetchMedCenterError;
