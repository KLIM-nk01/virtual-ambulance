import { USER_ROLE } from '@constants/userRole';
import * as cookies from '@core/cookies/cookies';

export const isAdmin = () => cookies.getCookie('userRole') === USER_ROLE.admin;
