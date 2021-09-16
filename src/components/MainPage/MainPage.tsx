import React from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav';
import LogInForm from '../LogInForm/LogInForm';
import { MainPageWrapper } from './MainPageStyle';

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <Nav />
      {/*<LogInForm/>*/}
    </MainPageWrapper>
  );
};

export default MainPage;
