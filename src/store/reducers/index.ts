import { medCenterReducer } from './medCenterReducer';
import { combineReducers } from 'redux';
import { doctorsReducer } from './doctorsReducer';
import { signInReduser } from './signInReducer';
import { authReducer } from './authUserReducer';

export const rootReducer = combineReducers({
  medCenter: medCenterReducer,
  doctors: doctorsReducer,
  signIn: signInReduser,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;
