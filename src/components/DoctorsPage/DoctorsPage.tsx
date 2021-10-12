import React, { useEffect, useState } from 'react';
import { DoctorsPageWrapper, DortorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Modal from '@components/common/Modal/Modal';
import Portal from '@components/common/Portal/Portal';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Shedule from './DoctorsCard/Schedule/Shedule';
import Loader from '@components/common/Loader/Loader';
import { useDispatch } from 'react-redux';
import { fetchDoctors } from '../../store/actionCreators/doctors';


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
        <DortorsWrapper>
          {doctors.map((doctor) => (
            <DoctorsCard {...doctor} setActive={setModalActive} />
          ))}
        </DortorsWrapper>
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
