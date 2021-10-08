const ADD_MEDCENTER = 'ADD_MEDCENTER';

interface IMedCenterData {
  medCenterData: any[];
}

interface IAction {
  type: string;
  payload?: any;
}

export const initialState: IMedCenterData = {
  medCenterData: [
    {
      name: 'LODE',
      address: 'Minsk, Independence, 58A',
      // photo: photo.LODE,
      description:
        'The multidisciplinary medical company "LODE" has been operating since 1992. For almost 30 years of activity, the centers have received many awards in their industry and, most importantly, popular confidence and recognition.',
      services: ['id_service'],
      medStaff: ['id_doctor'],
      latitude: 53.900601,
      longitude: 27.558972
    }
  ]
};

export const medCenterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_MEDCENTER:
      return {
        medCenterData: state.medCenterData.push(action.payload)
      };
    default:
      return state;
  }
};
