import { userActionType } from '@store/types/user';

export const setUser = (user: {
  id_user: string;
  userRole: string;
  name: string;
  photo: string;
}) => ({
  type: userActionType.SET_USER,
  payload: user,
});

export const logOut = () => ({
  type: userActionType.LOGOUT,
});
