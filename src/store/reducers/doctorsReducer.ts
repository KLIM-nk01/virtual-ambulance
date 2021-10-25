import { ActionType, DoctorsActionType, IDoctorsState } from '@store/types/doctorsType';

const initialState: IDoctorsState = {
  doctors: [],
  loading: false,
  error: null,
};

export const doctorsReducer = (state = initialState, action: ActionType): IDoctorsState => {
  switch (action.type) {
    case DoctorsActionType.FETCH_DOCTORS:
      return { loading: true, error: null, doctors: [] };
    case DoctorsActionType.FETCH_DOCTORS_SUCCESS:
      return { loading: false, error: null, doctors: action.payload };
    case DoctorsActionType.FETCH_DOCTORS_ERROR:
      return { loading: false, error: action.payload, doctors: [] };
    default:
      return state;
  }
};
