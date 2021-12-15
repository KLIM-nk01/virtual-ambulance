import React from 'react';
import { ModalWrapper, ModalContent } from './ModalStyle';

interface IModal {
  active: boolean;
  setActive?: (value: boolean) => void;
}

const Modal: React.FC<IModal> = ({ active, setActive, children }) => {
  return (
    <ModalWrapper active={active} onClick={() => setActive && setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
