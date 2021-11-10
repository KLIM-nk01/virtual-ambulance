import React, { useState } from 'react';
import Button from '@components/common/Button/Button';
import ItemDoctorsFeature from '../ItemDoctorsFeature';
import { ContainersName, ContainerFooter, ContainerContent } from '../ManagementStyle';
import { TimeManagementContainer, DateTimePickerWrapper } from './WorkTimeManagementStyle';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useDispatch } from 'react-redux';
import { profileDoctorAddDate, profileDoctorDelete } from '@store/actionCreators/profileData';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ERROR_MESSAGE } from '@constants/errorMessage';

const WorkTimeManagement: React.FC = () => {
  const dispatch = useDispatch();
  const [date, setDate] = React.useState<Date | null>(null);
  const { workTime } = useTypesSelector((state) => state.profile.profileData);
  const [addDateError, setAddDateError] = useState<string>('');

  const disableWeekends = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  const addNewDate = () => {
    let repeat = false;
    if (date) {
      workTime.map((time) => {
        time.time.split(':')[1] ===
          `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}` &&
          time.date.split('.')[0] === `${date.getDate()}` &&
          (repeat = true);
      });
      if (repeat) setAddDateError(ERROR_MESSAGE.ADD_DATE_ERROR);
      else {
        dispatch(
          profileDoctorAddDate(
            `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${
              date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
          )
        );
        setDate(null);
        setAddDateError('');
      }
    }
  };

  const deleteDate = (idDate: string) => {
    dispatch(profileDoctorDelete(idDate));
  };

  return (
    <TimeManagementContainer>
      <ContainersName>Work Time</ContainersName>

      <ContainerContent>
        {workTime.map((dateTime) => (
          <ItemDoctorsFeature deleteDate={deleteDate} {...dateTime} />
        ))}
      </ContainerContent>

      <DateTimePickerWrapper>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Сhoose date and time:"
            value={date}
            onChange={(newValue: Date | null) => {
              setDate(newValue);
            }}
            inputFormat="dd.MM.yyyy HH:mm a"
            shouldDisableDate={disableWeekends}
            minTime={new Date('01/01/2021 08:00 AM')}
            maxTime={new Date('01/01/2021 06:00 PM')}
          />
        </LocalizationProvider>
        {addDateError && <span>{addDateError}</span>}
      </DateTimePickerWrapper>

      {date ? (
        <Button onClick={() => addNewDate()} round size="small" variant="outlined">
          add
        </Button>
      ) : (
        <Button disabled round size="small" variant="outlined">
          add
        </Button>
      )}
    </TimeManagementContainer>
  );
};

export default WorkTimeManagement;
