import { medCenterReducer } from './medCenterReducer';
import { combineReducers } from 'redux';
import { doctorsReducer } from './doctorsReducer';
import { signInReducer } from './signInReducer';
import { authReducer } from './authUserReducer';
import { doctorsDirectionReducer } from './doctorsDirectionReducer';
import { signUpReducer } from './signUp';

export const rootReducer = combineReducers({
  medCenter: medCenterReducer,
  doctors: doctorsReducer,
  signIn: signInReducer,
  auth: authReducer,
  doctorsDirection: doctorsDirectionReducer,
  signUp: signUpReducer
});

export type RootState = ReturnType<typeof rootReducer>;
