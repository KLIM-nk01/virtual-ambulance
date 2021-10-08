import React, { useState } from 'react';
import { DoctorsPageWrapper, DortorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Modal from '@components/common/Modal/Modal';
import Portal from '@components/common/Portal/Portal';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import Shedule from './DoctorsCard/Schedule/Shedule';

const DoctorsPage: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const { doctorsData } = useTypesSelector((state) => state.doctors);
  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar />

      <DortorsWrapper>
        {doctorsData.map((doctor) => (
          <DoctorsCard {...doctor} setActive={setModalActive} />
        ))}
      </DortorsWrapper>
      <Portal>
        <Modal active={modalActive} setActive={setModalActive}>
          <Shedule />
        </Modal>
      </Portal>
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
