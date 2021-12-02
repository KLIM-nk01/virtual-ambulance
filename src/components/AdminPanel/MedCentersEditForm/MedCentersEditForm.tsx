import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MedCentersForm from '../MedCentersForm/MedCentersForm';
import {
  FormName,
  MedCentersEditFormWrapper,
  MedCentersFormWrapper,
} from './MedCentersEditFormStyle';

const MedCentersEditForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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
