import Error from '@components/common/Error/Error';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { IMedCenterData } from '@store/types/medCentersType';
import React, { useState } from 'react';
import { IEditForm } from '../AdminMedCenters';
import MedCentersHeader from './MedCentersHeader';
import MedCentersList from './MedCentersList/MedCentersList';
import { MedCenterWrapper } from './MedCentersStyle';

interface IMedCentersProps {
  setEditFormData: (value: IEditForm) => void;
}

const MedCenters: React.FC<IMedCentersProps> = ({setEditFormData}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { error, loading } = useTypesSelector((state) => state.medCenter);
  return (
    <MedCenterWrapper>
      <MedCentersHeader setSearchValue={setSearchValue} />
      {error ? <Error errorMessage={error} /> : <MedCentersList setEditFormData={setEditFormData} searchValue={searchValue} />}
    </MedCenterWrapper>
  );
};

export default MedCenters;
