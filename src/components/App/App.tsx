import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import GlobalStyle from '@styleMixin/globalstyle';
import { AppWrapper, Main } from './AppStyle';
import Header from '../Header/Header';
import Routs from '@components/Routs/Routs';
import { useDispatch } from 'react-redux';
import { userAuth } from '@store/actionCreators/auth';

const App: React.FC = () => {
  const [cookies] = useCookies();
  const dispatch = useDispatch();
  useEffect(() => {
    cookies.id && dispatch(userAuth());
  }, []);

  return (
    <BrowserRouter>
      <React.Suspense fallback={() => <div>loading</div>}>
        <GlobalStyle />
        <AppWrapper>
          <Header />

          <Main>
            <Routs />
          </Main>
        </AppWrapper>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
