import { IMedCenterState, MedCenterAction, MedCenterActionTypes } from '@store/types/medCentersType';

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
    case MedCenterActionTypes.FETCH_MEDCENTER:
      return { loading: true, error: null, medCenters: [] };
    case MedCenterActionTypes.FETCH_MEDCENTER_SUCCESS:
      return { loading: false, error: null, medCenters: action.payload };
    case MedCenterActionTypes.FETCH_MEDCENTER_ERROR:
      return { loading: false, error: action.payload, medCenters: [] };
    default:
      return state;
  }
};
