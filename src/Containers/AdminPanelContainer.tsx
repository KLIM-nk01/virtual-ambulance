import React from 'react';

const AdminPanel = React.lazy(() => import('@components/AdminPanel/AdminPanel'));

const AdminPanelContainer = () => <AdminPanel />;

export default AdminPanelContainer;
