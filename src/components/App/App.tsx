import React from 'react';
import GlobalStyle from '@styleMixin/globalstyle';
import { ROUTS } from '@constants/routs';
import { AppWrapper, Main } from './AppStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
// import MainPage from '@components/MainPage/MainPage';
import MedCentersPage from '@components/MedCentersPage/MedCentersPage';
import DoctorsPage from '@components/DoctorsPage/DoctorsPage';
import PersonalAccountPage from '@components/PesonalAccount/PersonalAccountPage';
import FormPage from '@components/Form/FormPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={() => <div>loading</div>}>
        <GlobalStyle />
        <AppWrapper>
          <Header />

          <Main>
            <Switch>
              <Route
                exact
                path={ROUTS.MAIN_PAGE_PATH}
                component={React.lazy(
                  () => import('@components/MainPage/MainPage')
                )}
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
                path={ROUTS.PERSONAL_ACCOUNT}
                render={() => <PersonalAccountPage />}
              />

              <Route path={ROUTS.FORM_PAGE} render={() => <FormPage />} />

              <Route
                exact
                path={ROUTS.SERVICES_PATH}
                component={React.lazy(
                  () => import('@containers/ServicesPageContainer')
                )}
              />
            </Switch>
          </Main>
        </AppWrapper>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
