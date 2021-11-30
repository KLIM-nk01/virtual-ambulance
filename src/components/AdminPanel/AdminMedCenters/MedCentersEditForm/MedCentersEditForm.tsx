import { IMedCenterData } from '@store/types/medCentersType';
import React from 'react';
import { IEditForm } from '../AdminMedCenters';
import {
  FormName,
  MedCentersEditFormWrapper,
  MedCentersFormWrapper,
} from './MedCentersEditFormStyle';
import MedCentersForm from './MedCentersForm/MedCentersForm';

interface IMedCentersEditForm {
  editFormData: IEditForm;
  setEditFormData: (value: IEditForm) => void;
}

const MedCentersEditForm: React.FC<IMedCentersEditForm> = ({ editFormData, setEditFormData }) => {
  return (
    <MedCentersEditFormWrapper>
      <MedCentersFormWrapper>
        <FormName>Edit or create new medical center.</FormName>
        <MedCentersForm setEditFormData={setEditFormData} editFormData={editFormData}/>
      </MedCentersFormWrapper>
    </MedCentersEditFormWrapper>
  );
};

export default MedCentersEditForm;
