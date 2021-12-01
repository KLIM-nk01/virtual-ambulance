import React from 'react';

const MedCentersEditForm = React.lazy(
  () => import('@components/AdminPanel/MedCentersEditForm/MedCentersEditForm')
);

const MedCentersEditFormContainer = () => <MedCentersEditForm />;

export default MedCentersEditFormContainer;
