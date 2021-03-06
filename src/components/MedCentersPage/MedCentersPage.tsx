import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { MedCentersPageWrapper } from './MedcentersPageStyle';
import MedCentersList from './MedCentersList/MedCentersList';
import MedCentersMap from './MedCentersMap/MedCentersMap';

const MedCentersPage: React.FC = () => {
  const dispatch = useDispatch();

  const [hoverMedCenter, setHoverMedCenter] = useState<string>('');

  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);

  const { error, medCenters, loading } = useTypesSelector((state) => state.medCenter);
 
  return (
    <MedCentersPageWrapper>
      <MedCentersList
        error={error}
        medCenters={medCenters}
        loading={loading}
        setHoverMedCenter={setHoverMedCenter}
      />
      <MedCentersMap medCenters={medCenters} hoverMedCenter={hoverMedCenter}></MedCentersMap>
    </MedCentersPageWrapper>
  );
};

export default MedCentersPage;
