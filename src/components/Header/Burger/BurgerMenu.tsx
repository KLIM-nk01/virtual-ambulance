import React from 'react';
import {
  BurgerMenuWrapper,
  BurgerMenuContent,
  MenuHeader,
  MenuItemWrapper
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
      {/* <BurgerBlur /> */}
      <BurgerMenuContent>
        <MenuHeader>Menu</MenuHeader>
        <MenuItemWrapper>{children}</MenuItemWrapper>
      </BurgerMenuContent>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
