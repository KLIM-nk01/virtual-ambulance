import React from 'react';
import { AdminPanelWrapper } from './AdminPanelStyle';
import AdminWorkSpace from './AdminWorkSpace/AdminWorkSpace';
import AdminNav from './AdminNav/AdminNav';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const AdminPanel: React.FC = () => {
  return (
    <AdminPanelWrapper>
      <AdminNav />
      <AdminWorkSpace />
    </AdminPanelWrapper>
  );
};

export default AdminPanel;
