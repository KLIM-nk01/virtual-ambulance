import React from 'react';
import MedCentersForm from '../MedCentersForm/MedCentersForm';
import {
  FormName,
  MedCentersEditFormWrapper,
  MedCentersFormWrapper,
} from './MedCentersEditFormStyle';

const MedCentersEditForm: React.FC = () => {
  return (
    <MedCentersEditFormWrapper>
      <MedCentersFormWrapper>
        <FormName>Edit medical center.</FormName>
        <MedCentersForm />
      </MedCentersFormWrapper>
    </MedCentersEditFormWrapper>
  );
};

export default MedCentersEditForm;
