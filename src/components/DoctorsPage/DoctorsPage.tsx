import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchDoctors } from '@store/actionCreators/doctors';
import { DoctorsPageWrapper, DoctorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';

const DoctorsPage: React.FC = () => {
  const doctors = useTypesSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const [selectedDirection, setSelectedDirection] = useState(['All Doctors']);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  const loaderOrErrorComponents = () => {
    if (doctors.loading) return <Loader />;

    if (doctors.error) return <Error errorMessage={doctors.error} />;

    return (
      <DoctorsWrapper>
        {selectedDirection.length === 1
          ? doctors.doctors.map((doctor) => <DoctorsCard key={doctor._id} {...doctor} />)
          : doctors.doctors
              .filter((doctor) => selectedDirection.indexOf(doctor.direction) > -1)
              .map((doctor) => <DoctorsCard key={doctor._id} {...doctor} />)}
      </DoctorsWrapper>
    );
  };

  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar
        setSelectedDirection={setSelectedDirection}
        selectedDirection={selectedDirection}
      />

      {loaderOrErrorComponents()}
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
