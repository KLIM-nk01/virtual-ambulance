import { medCenterReducer } from './medCenterReducer';
import { combineReducers } from 'redux';
import { doctorsReducer } from './doctorsReducer';
import { signInReduser } from './signInReducer';

export const rootReducer = combineReducers({
  medCenter: medCenterReducer,
  doctors: doctorsReducer,
  signIn: signInReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
