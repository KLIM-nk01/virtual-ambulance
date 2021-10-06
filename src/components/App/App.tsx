import React from 'react';
import GlobalStyle from '@styleMixin/globalstyle';
import { ROUTS } from '@constants/routs';
import { AppWrapper, Main } from './AppStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense
        fallback={() => (
          <div style={{ width: '500px', height: '500px', background: 'red' }}>
            loading
          </div>
        )}>
        <GlobalStyle />
        <AppWrapper>
          <Header />

          <Main>
            <Switch>
              <Route
                exact
                path={ROUTS.MAIN_PAGE_PATH}
                component={React.lazy(
                  () => import('@containers/MainPageContainer')
                )}
              />
              <Route
                exact
                path={ROUTS.MEDCENTERS_PAGE_PATH}
                component={React.lazy(
                  () => import('@containers/MedCentersPageContainer')
                )}
              />
              <Route
                exact
                path={ROUTS.DOCTORS_PAGE_PATH}
                component={React.lazy(
                  () => import('@containers/DoctorsPageContainer')
                )}
              />
              <Route
                exact
                path={ROUTS.PERSONAL_ACCOUNT}
                component={React.lazy(
                  () => import('@containers/ProfilePageContainer')
                )}
              />

              <Route
                path={ROUTS.FORM_PAGE}
                component={React.lazy(
                  () => import('@containers/FormPageContainer')
                )}
              />

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
