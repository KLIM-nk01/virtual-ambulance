import React from 'react';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';

export interface IMedStaff {
  userData: {
    name: string;
    lastName: string;
    photo: string;
  };
  direction: string;
}

interface IMedCenterListPros {
  error: null | string;
  loading: boolean;
  medCenters: {
    _id: string;
    name: string;
    address: string;
    photo: string;
    description: string;
    services: string[];
    medStaff: IMedStaff[];
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
          return <MedCenter key={medCenter._id} {...medCenter} />;
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
          return <MedCenter key={medCenter._id} {...medCenter} />;
        })
      )}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
