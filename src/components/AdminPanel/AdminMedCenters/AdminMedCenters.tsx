import { IMedCenterData } from '@store/types/medCentersType';
import React, { useState } from 'react';
import { AdminMedCentersWrapper } from './AdminMedCentersStyle';
import MedCenters from './MedCenters/MedCenters';
import MedCentersEditForm from './MedCentersEditForm/MedCentersEditForm';

export interface IEditForm {
  disabled: boolean;
  medCenterData?: IMedCenterData;
}

const AdminMedCenters: React.FC = () => {
  const [editFormData, setEditFormData] = useState<IEditForm>({ disabled: true });

  return (
    <AdminMedCentersWrapper>
      {editFormData.disabled ? (
        <MedCenters setEditFormData={setEditFormData} />
      ) : (
        <MedCentersEditForm setEditFormData={setEditFormData} editFormData={editFormData} />
      )}
    </AdminMedCentersWrapper>
  );
};

export default AdminMedCenters;
