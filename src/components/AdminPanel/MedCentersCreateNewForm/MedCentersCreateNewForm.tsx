import React, { useEffect } from 'react';
import MedCentersForm from '../MedCentersForm/MedCentersForm';
import {
  FormName,
  MedCentersEditFormWrapper,
  MedCentersFormWrapper,
} from '../MedCentersEditForm/MedCentersEditFormStyle';
import { useDispatch } from 'react-redux';
import { createNewMedCenter } from '@store/actionCreators/medCenters';

const MedCentersCreateNewForm: React.FC = () => {
    

  return (
    <MedCentersEditFormWrapper>
      <MedCentersFormWrapper>
        <FormName >Create new medical center.</FormName>
        <MedCentersForm submitFunction={createNewMedCenter}/>
      </MedCentersFormWrapper>
    </MedCentersEditFormWrapper>
  );
};

export default MedCentersCreateNewForm;
