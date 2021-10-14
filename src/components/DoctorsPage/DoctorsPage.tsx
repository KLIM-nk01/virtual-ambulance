import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchDoctors } from '@store/actionCreators/doctors';
import { DoctorsPageWrapper, DoctorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Modal from '@components/common/Modal/Modal';
import Portal from '@components/common/Portal/Portal';
import Shedule from './DoctorsCard/Schedule/Shedule';
import Loader from '@components/common/Loader/Loader';

const DoctorsPage: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const { doctors, loading } = useTypesSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar />
      {loading ? (
        <Loader />
      ) : (
        <DoctorsWrapper>
          {doctors.map((doctor) => (
            <DoctorsCard {...doctor} setActive={setModalActive} />
          ))}
        </DoctorsWrapper>
      )}

      <Portal>
        <Modal active={modalActive} setActive={setModalActive}>
          <Shedule />
        </Modal>
      </Portal>
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
