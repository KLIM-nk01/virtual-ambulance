import React from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ContainersName, Item, ContainerContent } from '../ManagementStyle';
import { OrderManagementContainer } from './OrderManagementStyle';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router';
import Button from '@components/common/Button/Button';

const WorkTimeManagement: React.FC = () => {
  const { workTime } = useTypesSelector((state) => state.profile.profileData);
  const history = useHistory();

  const filterByPatientName = workTime?.filter((appointment) => appointment.patientName);

  return (
    <OrderManagementContainer>
      <ContainersName>Пациент</ContainersName>

      <ContainerContent>
        {!filterByPatientName?.length ? (
          <span>Пока еще никто не записался на прием</span>
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

                  <Button
                    onClick={() => history.push(`${appointment.roomLink}`)}
                    size="small"
                    round
                  >
                    Звонок
                  </Button>
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
