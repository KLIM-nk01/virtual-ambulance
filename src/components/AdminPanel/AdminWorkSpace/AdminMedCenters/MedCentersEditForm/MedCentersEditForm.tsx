import React from 'react';
import { FormName, MedCentersEditFormWrapper, MedCentersFormWrapper } from './MedCentersEditFormStyle';
import MedCentersForm from './MedCentersForm/MedCentersForm';

const MedCentersEditForm: React.FC = () => {
  return (
    <MedCentersEditFormWrapper>
      <MedCentersFormWrapper>
        <FormName>Edit or create new medical center.</FormName>
        <MedCentersForm />
      </MedCentersFormWrapper>
    </MedCentersEditFormWrapper>
  );
};

export default MedCentersEditForm;
