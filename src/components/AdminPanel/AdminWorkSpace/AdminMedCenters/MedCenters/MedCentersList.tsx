import Button from '@components/common/Button/Button';
import MedCenter from '@components/MedCentersPage/MedCentersList/MedCenter/MedCenter';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MedCentersListWrapper, CenterWrapper } from './MedCentersStyle';

const MedCentersList: React.FC = () => {
  const dispatch = useDispatch();
  const { medCenters } = useTypesSelector((state) => state.medCenter);

  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);
  return (
    <MedCentersListWrapper>
      {medCenters.map((medCenter) => (
        <CenterWrapper>
          <MedCenter key={medCenter._id} adminPanel {...medCenter} />
          <div>
            <Button round variant="outlined">
              Edit
            </Button>
            <Button round variant="outlined">
              Delete
            </Button>
          </div>
        </CenterWrapper>
      ))}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
