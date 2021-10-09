import React from 'react';
import Nav from './Nav/Nav';
import { MainPageWrapper } from './MainPageStyle';
import Loader from '@components/common/Loader/Loader';

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <Nav />
    </MainPageWrapper>
  );
};

export default MainPage;
