import React from 'react';

const MedCentersCreateNewForm = React.lazy(
  () => import('@components/AdminPanel/MedCentersCreateNewForm/MedCentersCreateNewForm')
);

const MedCentersCreateNewFormContainer = () => <MedCentersCreateNewForm />;

export default MedCentersCreateNewFormContainer;
