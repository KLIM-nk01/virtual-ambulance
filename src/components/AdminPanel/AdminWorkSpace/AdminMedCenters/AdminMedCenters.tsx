import React from 'react';
import { AdminMedCentersWrapper } from './AdminMedCentersStyle';
import MedCenterAddForm from './MedCenterAddForm/MedCenterAddForm';
import MedCenterList from './MedCenterList/MedCenterList';

const AdminMedCenters: React.FC = () => {
  return (
    <AdminMedCentersWrapper>
      {/* <MedCenterAddForm /> */}
      <MedCenterList></MedCenterList>
    </AdminMedCentersWrapper>
  );
};

export default AdminMedCenters;
