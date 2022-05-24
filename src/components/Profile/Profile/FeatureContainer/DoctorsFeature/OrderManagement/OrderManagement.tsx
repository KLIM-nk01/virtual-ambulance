import React from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ContainersName, Item, ContainerContent } from '../ManagementStyle';
import { OrderManagementContainer } from './OrderManagementStyle';
import Avatar from '@mui/material/Avatar';
// import {useHistory} from 'react-router'


const WorkTimeManagement: React.FC = () => {
  const { workTime } = useTypesSelector((state) => state.profile.profileData);
  console.log(workTime)
  const filterByPatientName = workTime?.filter((appointment) => appointment.patientName);
  // const [roomLink, setRoomLink] = useState('')
  // const dispatch = profileData();

  const createRoomToVideoChat = (idAppointment: string) => {
    // const roomLink = `/room/${v4()}`
    console.log(idAppointment)
    // dispatch(createRoom(roomLink));
  }
  // console.log(workTime)
  return (
    <OrderManagementContainer>
      <ContainersName>Patient</ContainersName>

      <ContainerContent>
        {!filterByPatientName?.length ? (
          <span>At the moment, no one has signed up to you yet.</span>
        ) : (
          workTime.map((appointment) => {
            if (appointment.patientName) {
              return (
                <Item>
                  <Avatar sx={{ width: 30, height: 30 }} src={appointment.patientPhoto} />
                  <span>
                    {appointment.patientName} {appointment.patientLastName}
                  </span>
                  <span>{appointment.time}</span>
                  <span>{appointment.date}</span>

                 
                  <button onClick={() => createRoomToVideoChat(appointment._id)}>Create new room</button>

                </Item>
              );
            }
          })
        )}
      </ContainerContent>
    </OrderManagementContainer>
  );
};

export default WorkTimeManagement;
