import React from 'react';

const MedCentersPage = React.lazy(
  () => import('@components/MedCentersPage/MedCentersPage')
);

const MedCentersPageContainer = () => <MedCentersPage />;

export default MedCentersPageContainer;
