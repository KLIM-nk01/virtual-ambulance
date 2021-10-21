import React from 'react';
import uniqid from 'uniqid';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';

interface IMedCenterListPros {
  error: null | string;
  loading: boolean;
  medCenters: {
    id_medcenter: string;
    name: string;
    address: string;
    photo: string;
    description: string;
    services: string[];
    medStaff: string[];
    location: {
      lat: number;
      lon: number;
    };
  }[];
}

const MedCentersList: React.FC<IMedCenterListPros> = ({ error, medCenters, loading }) => {
  const errorMessage = (error: string) => <Error errorMessage={error} />;

  const contentRender = () => {
    error
      ? errorMessage(error)
      : medCenters.map((medCenter) => {
          return <MedCenter key={uniqid()} {...medCenter} />;
        });
  };

  return (
    <MedCentersListWrapper loading={loading}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error errorMessage={error} />
      ) : (
        medCenters.map((medCenter) => {
          return <MedCenter key={uniqid()} {...medCenter} />;
        })
      )}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
