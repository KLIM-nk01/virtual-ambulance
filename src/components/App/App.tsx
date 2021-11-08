import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@styleMixin/globalstyle';
import { AppWrapper, Main } from './AppStyle';
import Header from '../Header/Header';
import Routs from '@components/Routs/Routs';
import { useDispatch } from 'react-redux';
import { userAuth } from '@store/actionCreators/userAuth';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuth());
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
