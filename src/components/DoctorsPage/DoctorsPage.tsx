import React, { useState } from 'react';
import { DoctorsPageWrapper, DortorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Modal from '@components/common/Modal/Modal';
import Portal from '@components/common/Portal/Portal';
import { doctorsData } from '@data/doctorsData'; 


const DoctorsPage: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar />

      <DortorsWrapper>
        {doctorsData.map((doctor) => (
          <DoctorsCard {...doctor} setActive={setModalActive} />
        ))}
      </DortorsWrapper>
      <Portal>
        <Modal active={modalActive} setActive={setModalActive} />
      </Portal>
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
