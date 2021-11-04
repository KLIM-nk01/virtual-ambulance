import { ProfileAction, ProfileActionTypes } from "@store/types/profileData";
import { Dispatch } from "redux";

export const userSignIn = () => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    dispatch({type: ProfileActionTypes.FETCH_PROFILE});

    try {
      const response: AxiosResponse<{ user: any; token: string }> = await axios.post(
        API_URL.AUTHORIZATION,
        dataAuth
      );

      if (response.data && response.data.user) {
        dispatch(setUser(response.data.user));
        dispatch({ type: ActionsType.SIGNIN_SUCCESS });
        cookies.setCookie('id_user', response.data.user.id_user, {});
        cookies.setCookie('userRole', response.data.user.userRole, {});
        cookies.setCookie('token', response.data.token, {});
      }
    } catch (error) {
      if (error.response) {
        error.response.status >= 400 &&
          dispatch({
            type: ActionsType.SIGNIN_ERROR,
            errorMessage: error.response.data.message,
          });
      } else if (error.request) {
        dispatch({
          type: ActionsType.SIGNIN_ERROR,
          errorMessage: ERROR_MESSAGE.SERVER_ERROR,
        });
      }
    }
  };
};
