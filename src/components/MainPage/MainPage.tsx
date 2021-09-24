import React from 'react';
import Nav from './Nav/Nav';
import { MainPageWrapper } from './MainPageStyle';
import Page from '@components/Page/Page';

const MainPage: React.FC = () => {
  return (
    <Page>
      <MainPageWrapper>
        <Nav />
      </MainPageWrapper>
    </Page>
  );
};

export default MainPage;
