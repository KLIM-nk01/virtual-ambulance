import React from 'react';

const DoctorsPage = React.lazy(
  () => import('@components/DoctorsPage/DoctorsPage')
);

const DoctorsPageContainer = () => <DoctorsPage />;

export default DoctorsPageContainer;
