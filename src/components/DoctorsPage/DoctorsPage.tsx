import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchDoctors } from '@store/actionCreators/doctors';
import { DoctorsPageWrapper, DoctorsWrapper } from './DoctorsPageStyle';
import DoctorsCard from './DoctorsCard/DoctorsCard';
import DoctorsPageNavBar from './DoctorsPageNavBar/DoctorsPageNavBar';
import Loader from '@components/common/Loader/Loader';
import Error from '@components/common/Error/Error';

// import { v4 } from 'uuid';

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

      {/* <div ref={rootNode}>
        <h1>Available Rooms</h1>
        <div>
          <ul>
            {rooms.map((roomID) => (
              <li key={roomID}>
                {roomID}
                <button
                  onClick={() => {
                    history.push(`/room/${roomID}`);
                  }}
                >
                  JOIN ROOMS
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              history.push(`/room/${v4()}`);
            }}
          >
            Create new room
          </button>
        </div>
      </div> */}

      {loaderOrErrorComponents()}
    </DoctorsPageWrapper>
  );
};

export default DoctorsPage;
