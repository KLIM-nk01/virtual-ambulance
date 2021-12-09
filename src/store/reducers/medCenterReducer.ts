import MedCenters from '@components/AdminPanel/AdminMedCenters/MedCenters/MedCenters';
import {
  IMedCenterState,
  MedCenterAction,
  MedCenterActionTypes,
  IMedCenterData,
} from '@store/types/medCentersType';

export const initialState: IMedCenterState = {
  medCenters: [],
  loading: false,
  error: null,
  successMessage: '',
};

export const medCenterReducer = (
  state = initialState,
  action: MedCenterAction
): IMedCenterState => {
  switch (action.type) {
    case MedCenterActionTypes.FETCH_MEDCENTERS:
      return { loading: true, error: null, medCenters: [] };
    case MedCenterActionTypes.FETCH_MEDCENTERS_SUCCESS:
      return { loading: false, error: null, medCenters: action.payload };
    case MedCenterActionTypes.FETCH_MEDCENTERS_ERROR:
      return { loading: false, error: action.errorMessage, medCenters: [] };

    case MedCenterActionTypes.FETCH_MEDCENTER:
      return {
        ...state,
        error: null,
        medCenters: action.payload,
      };

    case MedCenterActionTypes.CREATE_NEW_MEDCENTER:
      return { ...state, loading: true, error: null };
    case MedCenterActionTypes.CREATE_NEW_MEDCENTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        successMessage: action.payload,
      };
    case MedCenterActionTypes.CREATE_NEW_MEDCENTER_ERROR:
      return { loading: false, error: action.errorMessage, medCenters: [] };

    case MedCenterActionTypes.DELETE_MEDCENTER:
      return {
        loading: false,
        error: null,
        medCenters: state.medCenters.filter((center) => action.payload !== center._id),
      };

    case MedCenterActionTypes.EDIT_MEDCENTER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case MedCenterActionTypes.EDIT_MEDCENTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        successMessage: action.payload,
      };
    case MedCenterActionTypes.EDIT_MEDCENTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
      };
    default:
      return state;
  }
};
