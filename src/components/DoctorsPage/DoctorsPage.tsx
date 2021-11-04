import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
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

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  const [choiseDirection, setChoiseDirection] = useState<string>('All Doctors');
  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar
        setChoiseDirection={setChoiseDirection}
        choiseDirection={choiseDirection}
      />
      {doctors.loading ? (
        <Loader />
      ) : doctors.error ? (
        <Error errorMessage={doctors.error} />
      ) : (
        <DoctorsWrapper>
          {choiseDirection === 'All Doctors'
            ? doctors.doctors.map((doctor) => <DoctorsCard key={uniqid()} {...doctor} />)
            : doctors.doctors
                .filter((doctor) => doctor.direction === choiseDirection)
                .map((doctor) => <DoctorsCard key={uniqid()} {...doctor} />)}
        </DoctorsWrapper>
      )}
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
