import React from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ContainersName, Item, ContainerContent } from '../ManagementStyle';
import { OrderManagementContainer } from './OrderManagementStyle';
import Avatar from '@mui/material/Avatar';

const WorkTimeManagement: React.FC = () => {
  const { workTime } = useTypesSelector((state) => state.profile.profileData);
  return (
    <OrderManagementContainer>
      <ContainersName>Patient</ContainersName>

      <ContainerContent>
        {!workTime?.length ? (
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
