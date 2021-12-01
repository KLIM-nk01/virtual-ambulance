import { IMedCenterData } from '@store/types/medCentersType';
import React, { useState } from 'react';
import { AdminMedCentersWrapper } from './AdminMedCentersStyle';
import MedCenters from './MedCenters/MedCenters';

export interface IEditForm {
  disabled: boolean;
  medCenterData?: IMedCenterData;
}

const AdminMedCenters: React.FC = () => {
  const [editFormData, setEditFormData] = useState<IEditForm>({ disabled: true });

  return (
    <AdminMedCentersWrapper>
      <MedCenters setEditFormData={setEditFormData} />
    </AdminMedCentersWrapper>
  );
};

export default AdminMedCenters;
