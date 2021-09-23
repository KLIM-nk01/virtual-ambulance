import React from 'react';

import { services } from '@data/services/services';

const ServicesPage = React.lazy(
  () => import('@components/ServicesPage/ServicesPage')
);

export const ServicesPageContainer = () => <ServicesPage services={services} />;
