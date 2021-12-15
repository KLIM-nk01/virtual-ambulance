import React from 'react';

const FormPage = React.lazy(() => import('@components/Form/FormPage'));

const FormPageContainer = () => <FormPage />;

export default FormPageContainer;
