import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchDoctors } from '@store/actionCreators/doctors';
import { DoctorsPageWrapper, DoctorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Loader from '@components/common/Loader/Loader';
import { fetchDoctorsDirection } from '@store/actionCreators/doctorsDirection';

const DoctorsPage: React.FC = () => {
  const state = useTypesSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchDoctorsDirection());
  }, []);

  const [choiseDirection, setChoiseDirection] = useState<string>('All Doctors');

  return (
    <DoctorsPageWrapper>
      <DoctorsPageNavBar
        setChoiseDirection={setChoiseDirection}
        direction={state.doctorsDirection.directions}
        choiseDirection={choiseDirection}
      />
      {state.doctors.loading || state.doctorsDirection.loading ? (
        <Loader />
      ) : (
        <DoctorsWrapper>
          {choiseDirection === 'All Doctors'
            ? state.doctors.doctors.map((doctor) => (
                <DoctorsCard key={doctor.id_doctor} {...doctor} />
              ))
            : state.doctors.doctors
                .filter((doctor) => doctor.direction === choiseDirection)
                .map((doctor) => <DoctorsCard key={doctor.id_doctor} {...doctor} />)}
        </DoctorsWrapper>
      )}
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
