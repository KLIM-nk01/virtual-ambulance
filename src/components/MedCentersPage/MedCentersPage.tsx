import React, { useEffect } from 'react';
import { MedCentersPageWrapper } from './MedcentersPageStyle';
import MedCentersList from './MedCentersList/MedCentersList';
import MedCentersMap from './MedCentersMap/MedCentersMap';
import { useDispatch } from 'react-redux';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { useTypesSelector } from '@hooks/UseTypedSelector';

const MedCentersPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);
  
  const { error, medCenters, loading } = useTypesSelector(
    (state) => state.medCenter
  );

  return (
    <MedCentersPageWrapper>
      <MedCentersList error={error} medCenters={medCenters} loading={loading} />
      <MedCentersMap medCenters={medCenters}></MedCentersMap>
    </MedCentersPageWrapper>
  );
};

export default MedCentersPage;
