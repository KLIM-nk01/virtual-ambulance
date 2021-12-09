import React from 'react';

const AdminMedCenters = React.lazy(
  () => import('@components/AdminPanel/AdminMedCenters/AdminMedCenters')
);

const AdminPanelContainer = () => <AdminMedCenters />;

export default AdminPanelContainer;
