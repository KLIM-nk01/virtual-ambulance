import {
  IMedCenterState,
  MedCenterAction,
  MedCenterActionTypes,
} from '@store/types/medCentersType';

export const initialState: IMedCenterState = {
  medCenters: [],
  loading: false,
  error: null,
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
    default:
      return state;
  }
};
