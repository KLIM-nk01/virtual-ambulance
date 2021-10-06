import { medCenterReducer } from './medCenterReducer';
import { combineReducers } from 'redux';
import { doctorsReducer } from './doctorsReducer';

export const rootReducer = combineReducers({
  medCenter: medCenterReducer,
  doctors: doctorsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
