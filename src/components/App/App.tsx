import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GlobalStyle from '@styleMixin/globalstyle';
import { userAuth } from '@store/actionCreators/userAuth';
import { AppWrapper, Main } from './AppStyle';
import Header from '@components/Header/Header';
import Routs from '@components/Routs/Routs';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import AdminNav from '@components/AdminPanel/AdminNav/AdminNav';
import { isAdmin } from '@components/Helpers/AdminHelper';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuth());
  }, []);

  const { userRole } = useTypesSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <React.Suspense fallback={() => <div>loading</div>}>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Main>
            {isAdmin() && <AdminNav />}
            <Routs />
          </Main>
        </AppWrapper>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
