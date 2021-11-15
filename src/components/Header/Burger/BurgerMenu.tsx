import React from 'react';
import {
  BurgerMenuWrapper,
  BurgerMenuContent,
  MenuHeader,
} from './BurgerMenuStyle';

interface IBurgerMenuProps {
  menuActive: boolean;
  setMenuActive: (value: boolean) => void;
}

const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  setMenuActive,
  menuActive,
  children
}) => {
  return (
    <BurgerMenuWrapper
      menuActive={menuActive}
      onClick={() => setMenuActive(!menuActive)}>
      <BurgerMenuContent>
        <MenuHeader>Menu</MenuHeader>
        <div>{children}</div>
      </BurgerMenuContent>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
