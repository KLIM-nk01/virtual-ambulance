import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Loader from '@components/common/Loader/Loader';

const MedCentersList: React.FC = () => {
  const dispatch = useDispatch();
  const { medCenters, loading, error } = useTypesSelector(
    (state) => state.medCenter
  );
  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);

  if (error) return <h1>{error} </h1>;

  return (
    <MedCentersListWrapper loading={loading}>
      {loading ? (
        <Loader />
      ) : (
        medCenters.map((medCenter) => {
          return <MedCenter key={medCenter.id} {...medCenter} />;
        })
      )}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
