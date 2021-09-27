import React from 'react';
import GlobalStyle from '@styleMixin/globalstyle';
import { ROUTS } from '@constants/routs';
import { AppWrapper, Main } from './AppStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '@components/MainPage/MainPage';
import MedCentersPage from '@components/MedCentersPage/MedCentersPage';
import DoctorsPage from '@components/DoctorsPage/DoctorsPage';
import { ServicesPageContainer } from '@containers/ServicesPageContainer';
import PersonalAccountPage from '@components/PesonalAccount/PersonalAccountPage';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppWrapper>
        <Header />

        <Main>
          <Switch>
            <Route
              exact
              path={ROUTS.MAIN_PAGE_PATH}
              render={() => <MainPage />}
            />
            <Route
              exact
              path={ROUTS.MEDCENTERS_PAGE_PATH}
              render={() => <MedCentersPage />}
            />
            <Route
              exact
              path={ROUTS.DOCTORS_PAGE_PATH}
              render={() => <DoctorsPage />}
            />
            <Route
              exact
              path={ROUTS.LOGIN_FORM}
              render={() => <PersonalAccountPage />}
            />
            <React.Suspense fallback={() => <div>loading</div>}>
              <Route
                exact
                path={ROUTS.SERVICES_PATH}
                render={() => <ServicesPageContainer />}
              />
            </React.Suspense>
            s
          </Switch>
        </Main>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
