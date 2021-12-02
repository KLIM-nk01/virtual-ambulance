import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMedCenters, medCenterDelete } from '@store/actionCreators/medCenters';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Button from '@components/common/Button/Button';
import MedCenter from '@components/MedCentersPage/MedCentersList/MedCenter/MedCenter';
import { MedCentersListWrapper, CenterWrapper } from './MedCentersListStyle';

interface IMedCentersListProps {
  searchValue: string;
}

const MedCentersList: React.FC<IMedCentersListProps> = ({ searchValue }) => {
  const dispatch = useDispatch();
  const { medCenters } = useTypesSelector((state) => state.medCenter);

  const deleteMedCenter = (idMedCenter: string) => {
    dispatch(medCenterDelete(idMedCenter));
  };
  
  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);

  const filtrationСondition = (medCenter: { name: string }) =>
    medCenter.name.toLowerCase().includes(searchValue.toLowerCase());

  return (
    <MedCentersListWrapper>
      {medCenters
        .filter((medCenter) => filtrationСondition(medCenter))
        .map((medCenter) => (
          <CenterWrapper key={medCenter._id}>
            <MedCenter adminPanel {...medCenter} />
            <div>
              <NavLink to={`/editMedCenter/${medCenter._id}`}>
                <Button round variant="outlined">
                  Edit
                </Button>
              </NavLink>

              <Button onClick={() => deleteMedCenter(medCenter._id)} round variant="outlined">
                Delete
              </Button>
            </div>
          </CenterWrapper>
        ))}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
