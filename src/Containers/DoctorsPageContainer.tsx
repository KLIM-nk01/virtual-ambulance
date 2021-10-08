// import { useTypesSelector } from '../hooks/UseTypedSelector';
import React from 'react';

const DoctorsPage = React.lazy(
  () => import('@components/DoctorsPage/DoctorsPage')
);

// const state = useTypesSelector(state => state.medCenter)

const DoctorsPageContainer = () => <DoctorsPage />;

export default DoctorsPageContainer;
