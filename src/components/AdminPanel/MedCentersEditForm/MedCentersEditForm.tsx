import Loader from '@components/common/Loader/Loader';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { editMedCenter, fetchMedCenterWithId } from '@store/actionCreators/medCenters';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MedCentersForm from '../MedCentersForm/MedCentersForm';
import {
  FormName,
  MedCentersEditFormWrapper,
  MedCentersFormWrapper,
} from './MedCentersEditFormStyle';
import Error from '@components/common/Error/Error';

const MedCentersEditForm: React.FC = () => {
  const { idMedCenter } = useParams<{ idMedCenter: string }>();
  const {
    medCenters: [medCenter],
    loading,
    error,
  } = useTypesSelector((state) => state.medCenter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedCenterWithId(idMedCenter));
  }, []);

  return (
    <MedCentersEditFormWrapper>
      {error ? (
        <Error errorMessage={error} />
      ) : (
        medCenter && (
          <MedCentersFormWrapper>
            <FormName>Edit medical center</FormName>
            <MedCentersForm submitFunction={editMedCenter} isEdit={medCenter} />
          </MedCentersFormWrapper>
        )
      )}
    </MedCentersEditFormWrapper>
  );
};

export default MedCentersEditForm;
