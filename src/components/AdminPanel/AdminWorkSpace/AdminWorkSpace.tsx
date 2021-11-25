import { ROUTS } from '@constants/routs';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDoctors from './AdminDoctors/AdminDoctors';
import AdminMedCenters from './AdminMedCenters/AdminMedCenters';
import AdminPatients from './AdminPatients/AdminPatients';
import { AdminWorkSpaceWrapper } from './AdminWorkSpaceStyle';

const AdminWorkSpace: React.FC = () => {
  return (
    <AdminWorkSpaceWrapper>
      <Switch>
        <Route exact path={ROUTS.ADMIN_PANEL_MED_CENTERS} component={AdminMedCenters} />
        <Route exact path={ROUTS.ADMIN_PANEL_DOCTORS} component={AdminDoctors} />
        <Route exact path={ROUTS.ADMIN_PANEL_PATIENTS} component={AdminPatients} />
      </Switch>
    </AdminWorkSpaceWrapper>
  );
};

export default AdminWorkSpace;
