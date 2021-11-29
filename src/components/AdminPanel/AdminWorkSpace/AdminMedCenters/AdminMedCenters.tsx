import React from 'react';
import { AdminMedCentersWrapper } from './AdminMedCentersStyle';
import MedCenters from './MedCenters/MedCenters';

const AdminMedCenters: React.FC = () => {
  return (
    <AdminMedCentersWrapper>
      <MedCenters></MedCenters>
    </AdminMedCentersWrapper>
  );
};

export default AdminMedCenters;