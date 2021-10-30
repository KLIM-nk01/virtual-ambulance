import { medCenterReducer } from './medCenterReducer';
import { combineReducers } from 'redux';
import { doctorsReducer } from './doctorsReducer';
import { signInReducer } from './signInReducer';
import { doctorsDirectionReducer } from './doctorsDirectionReducer';
import { signUpReducer } from './signUp';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  medCenter: medCenterReducer,
  doctors: doctorsReducer,
  
  signIn: signInReducer,
  doctorsDirection: doctorsDirectionReducer,
  signUp: signUpReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
