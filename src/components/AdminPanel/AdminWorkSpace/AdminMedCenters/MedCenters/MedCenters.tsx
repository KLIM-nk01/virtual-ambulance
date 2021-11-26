import React from 'react';
import MedCenterAddForm from './MedCenterAddForm/MedCenterAddForm';
import MedCentersList from './MedCentersList';
import { FormWrapper, MedCenterWrapper } from './MedCentersStyle';

const MedCenters: React.FC = () => {
  return (
    <MedCenterWrapper>
      <MedCentersList />
      <FormWrapper>
  
        <MedCenterAddForm />
      </FormWrapper>
    </MedCenterWrapper>
  );
};

export default MedCenters;
