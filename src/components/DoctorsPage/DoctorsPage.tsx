import React, { useState } from 'react';
import { DoctorsPageWrapper, DortorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Modal from '@components/common/Modal/Modal';

const DoctorsPage: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar />

      <DortorsWrapper>
        <DoctorsCard setActive={setModalActive} />
        <DoctorsCard setActive={setModalActive} />
        <DoctorsCard setActive={setModalActive} />
        <DoctorsCard setActive={setModalActive} />
      </DortorsWrapper>
      <Modal active={modalActive} setActive={setModalActive} />
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
