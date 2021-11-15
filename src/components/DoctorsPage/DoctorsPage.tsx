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

  const conditionRendering = () => {
    if (doctors.loading) return <Loader />;
    else if (doctors.error) return <Error errorMessage={doctors.error} />;
    else {
      return (
        <DoctorsWrapper>
          {choiseDirection.length === 1 && choiseDirection[0] === 'All Doctors'
            ? doctors.doctors.map((doctor) => <DoctorsCard key={uniqid()} {...doctor} />)
            : doctors.doctors
                .filter((doctor) => choiseDirection.indexOf(doctor.direction) > -1)
                .map((doctor) => <DoctorsCard key={doctor._id} {...doctor} />)}
        </DoctorsWrapper>
      );
    }
  };
  const [choiseDirection, setChoiseDirection] = useState(['All Doctors']);

  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar
        setChoiseDirection={setChoiseDirection}
        choiseDirection={choiseDirection}
      />

      {conditionRendering()}
      
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
