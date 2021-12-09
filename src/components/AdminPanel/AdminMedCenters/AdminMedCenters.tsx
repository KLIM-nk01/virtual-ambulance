import React, { useState } from 'react';
import { IMedCenterData } from '@store/types/medCentersType';
import { AdminMedCentersWrapper } from './AdminMedCentersStyle';
import MedCenters from './MedCenters/MedCenters';

export interface IEditForm {
  disabled: boolean;
  medCenterData?: IMedCenterData;
}

const AdminMedCenters: React.FC = () => {
  return (
    <AdminMedCentersWrapper>
      <MedCenters />
    </AdminMedCentersWrapper>
  );
};

export default AdminMedCenters;
