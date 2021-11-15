import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTS } from '@constants/routs';

const Routs: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path={ROUTS.MAIN_PAGE_PATH}
        component={React.lazy(() => import('@containers/MainPageContainer'))}
      />
      <Route
        exact
        path={ROUTS.MEDCENTERS_PAGE_PATH}
        component={React.lazy(() => import('@containers/MedCentersPageContainer'))}
      />
      <Route
        exact
        path={ROUTS.DOCTORS_PAGE_PATH}
        component={React.lazy(() => import('@containers/DoctorsPageContainer'))}
      />
      <Route
        exact
        path={ROUTS.PERSONAL_ACCOUNT}
        component={React.lazy(() => import('@containers/ProfilePageContainer'))}
      />

      <Route
        path={ROUTS.FORM_PAGE}
        component={React.lazy(() => import('@containers/FormPageContainer'))}
      />

      <Route
        exact
        path={ROUTS.SERVICES_PATH}
        component={React.lazy(() => import('@containers/ServicesPageContainer'))}
      />
    </Switch>
  );
};

export default Routs;
