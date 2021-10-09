import { IMedCenterState, MedCenterAction, MedCenterActionTypes } from '../types/medCentersType';

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


// {
//   name: 'LODE',
//   address: 'Minsk, Independence, 58A',
//   // photo: photo.LODE,
//   description:
//     'The multidisciplinary medical company "LODE" has been operating since 1992. For almost 30 years of activity, the centers have received many awards in their industry and, most importantly, popular confidence and recognition.',
//   services: ['id_service'],
//   medStaff: ['id_doctor'],
//   latitude: 53.900601,
//   longitude: 27.558972,
// },
