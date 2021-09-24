import React from 'react';
import { MedCentersPageWrapper } from './MedcentersPageStyle';
import MedCentersList from './MedCentersList/MedCentersList';
import MedCentersMap from './MedCentersMap/MedCentersMap';
import Page from '@components/Page/Page';

const MedCentersPage: React.FC = () => {
  return (
    <Page>
      <MedCentersList></MedCentersList>
      <MedCentersMap></MedCentersMap>
    </Page>
  );
};

export default MedCentersPage;
