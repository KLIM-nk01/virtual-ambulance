import React from 'react';

const MainPage = React.lazy(() => import('@components/MainPage/MainPage'));

const MainPageContainer = () => <MainPage />;

export default MainPageContainer;
