import React from 'react';
import MedCentersForm from './MedCentersForm';
import MedCentersList from './MedCentersList';
import { FormWrapper, MedCenterWrapper } from './MedCentersStyle';

const MedCenters: React.FC = () => {
  return (
    <MedCenterWrapper>
      <div>Name</div>
      <MedCentersList />
    </MedCenterWrapper>
  );
};

export default MedCenters;
