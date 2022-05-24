import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
// import { useTypesSelector } from '@hooks/UseTypedSelector';
// import { USER_ROLE } from '@constants/userRole';
// import AdminMedCenters from '@components/AdminPanel/AdminMedCenters/AdminMedCenters';
import { isAdmin } from '@components/Helpers/AdminHelper';

const userRouts = [
  {
    path: ROUTS.MAIN_PAGE_PATH,
    exact: true,
    component: React.lazy(() => import('@containers/MainPageContainer')),
  },
  {
    path: ROUTS.MEDCENTERS_PAGE_PATH,
    exact: true,
    component: React.lazy(() => import('@containers/MedCentersPageContainer')),
  },
  {
    path: ROUTS.DOCTORS_PAGE_PATH,
    exact: true,
    component: React.lazy(() => import('@containers/DoctorsPageContainer')),
  },
  {
    path: ROUTS.PERSONAL_ACCOUNT,
    exact: true,
    component: React.lazy(() => import('@containers/ProfilePageContainer')),
  },
  {
    path: ROUTS.FORM_PAGE,
    exact: false,
    component: React.lazy(() => import('@containers/FormPageContainer')),
  },
  {
    path: ROUTS.ROOM,
    exact: false,
    component: React.lazy(() => import('@containers/RoomPageContainer')),
  },
];

const adminRouts = [
  {
    path: ROUTS.ADMIN_PANEL_MED_CENTERS_LIST,
    exact: true,
    component: React.lazy(() => import('@containers/AdminMedCentersContainer')),
  },
  {
    path: ROUTS.FORM_PAGE,
    exact: false,
    component: React.lazy(() => import('@containers/FormPageContainer')),
  },
  {
    path: ROUTS.ADMIN_PANEL_MED_CENTERS_EDIT,
    exact: false,
    component: React.lazy(() => import('@containers/AdminMedCentersEditFormContainer')),
  },
  {
    path: ROUTS.ADMIN_PANEL_MED_CENTERS_CREATE_NEW,
    exact: false,
    component: React.lazy(() => import('@containers/AdminCreateNewCenterFormContainer')),
  },
];

const Routs: React.FC = () => {
  // const { userRole } = useTypesSelector((state) => state.user.currentUser);

  return (
    <Switch>
      {isAdmin()
        ? adminRouts.map((rout) => <Route key={rout.path} {...rout} />)
        : userRouts.map((rout) => <Route key={rout.path} {...rout} />)}
    </Switch>
  );
};

export default Routs;
