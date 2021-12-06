import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMedCenters, medCenterDelete } from '@store/actionCreators/medCenters';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Button from '@components/common/Button/Button';
import MedCenter from '@components/MedCentersPage/MedCentersList/MedCenter/MedCenter';
import { MedCentersListWrapper, CenterWrapper } from './MedCentersListStyle';
import Portal from '@components/common/Portal/Portal';
import Modal from '@components/common/Modal/Modal';
import DeleteMedCenterPopup from './DeleteMedCenterPopup.tsx/DeleteMedCenterPopup';

interface IMedCentersListProps {
  searchValue: string;
}

const MedCentersList: React.FC<IMedCentersListProps> = ({ searchValue }) => {
  const dispatch = useDispatch();
  const { medCenters } = useTypesSelector((state) => state.medCenter);
  
  const [modalActive, setModalActive] = useState(false);
  const [idDeleteCenter, setIdDeletedCenter] = useState<string>('');

  const deleteMedCenter = (idMedCenter: string) => {
    setModalActive(!modalActive);
    setIdDeletedCenter(idMedCenter);
  };

  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);

  const filterMedCenters = medCenters.filter((medCenter) =>
    medCenter.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <MedCentersListWrapper>
      {filterMedCenters.map((medCenter) => (
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
      <Portal>
        <Modal active={modalActive} setActive={setModalActive}>
          <DeleteMedCenterPopup idMedCenter={idDeleteCenter} setModalActive={setModalActive} />
        </Modal>
      </Portal>
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
