import { medCenterReducer } from './medCenterReducer';
import { combineReducers } from 'redux';
import { doctorsReducer } from './doctorsReducer';
import { signInReducer } from './signInReducer';
import { doctorsDirectionReducer } from './doctorsDirectionReducer';
import { signUpReducer } from './signUp';
import { userReducer } from './userReducer';
import { profileReducer } from './profileDataReducer';

export const rootReducer = combineReducers({
  medCenter: medCenterReducer,
  doctors: doctorsReducer,
  signIn: signInReducer,
  doctorsDirection: doctorsDirectionReducer,
  signUp: signUpReducer,
  user: userReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
