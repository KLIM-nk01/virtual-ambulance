import React from 'react';
import Nav from './Nav/Nav';
import { MainPageWrapper } from './MainPageStyle';
import { isAdmin } from '@components/Helpers/AdminHelper';

const MainPage: React.FC = () => {

  return (
    <MainPageWrapper>
      <Nav />
    </MainPageWrapper>
  );
};

export default MainPage;
