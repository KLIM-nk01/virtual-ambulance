import React, { useState } from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Error from '@components/common/Error/Error';
import MedCentersHeader from './MedCentersHeader';
import MedCentersList from './MedCentersList/MedCentersList';
import { MedCenterWrapper } from './MedCentersStyle';

const MedCenters: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const { error, loading } = useTypesSelector((state) => state.medCenter);
  return (
    <MedCenterWrapper>
      <MedCentersHeader setSearchValue={setSearchValue} />
      {error ? (
        <Error errorMessage={error} />
      ) : (
        <MedCentersList searchValue={searchValue} />
      )}
    </MedCenterWrapper>
  );
};

export default MedCenters;
