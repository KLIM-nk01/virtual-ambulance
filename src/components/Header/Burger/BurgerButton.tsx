import React from 'react';
import { BurgerButtonWrapper } from './BurgerMenuStyle';

interface IBurgerButtonProps {
  setMenuActive: (value: boolean) => void;
  menuActive: boolean;
}

const BurgerButton: React.FC<IBurgerButtonProps> = ({
  setMenuActive,
  menuActive
}) => {
  return (
    <BurgerButtonWrapper onClick={() => setMenuActive(!menuActive)}>
      <span></span>
    </BurgerButtonWrapper>
  );
};

export default BurgerButton;
