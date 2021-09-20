/* eslint-disable import/extensions */
import React from 'react';
import GlobalStyle from '../../style/globalstyle';
import { ROUTS } from '../../constants/routs';
import { AppWrapper } from './AppStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '@components/MainPage/MainPage';
import MedCentersPage from '../MedCentersPage/MedCentersPage';
import DoctorsPage from '../DoctorsPage/DoctorsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact path={ROUTS.MAIN_PAGE_PATH} render={() => <MainPage />} />
          <Route exact path={ROUTS.MEDCENTERS_PAGE_PATH} render={() => <MedCentersPage />} />
          <Route exact path={ROUTS.DOCTORS_PAGE_PATH} render={() => <DoctorsPage />} />
        </Switch>

        {/*<LogInForm/>*/}
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
