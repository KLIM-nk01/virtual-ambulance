import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ERROR_MESSAGE } from '@constants/errorMessage';
import { profileDoctorAddDate, profileDoctorDelete } from '@store/actionCreators/profileData';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@components/common/Button/Button';
import ItemDoctorsFeature from '../ItemDoctorsFeature';
import { ContainersName, ContainerContent } from '../ManagementStyle';
import { TimeManagementContainer, DateTimePickerWrapper } from './WorkTimeManagementStyle';
import {v4} from 'uuid'

interface ILocState {
  date: Date | null;
  addDateError: string;
}
const WorkTimeManagement: React.FC = () => {
  const dispatch = useDispatch();
  const { workTime } = useTypesSelector((state) => state.profile.profileData);

  const [locState, setLocState] = useState<ILocState>({
    date: null,
    addDateError: '',
  });

  const disableWeekends = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

  const addNewDate = () => {
    let repeat = false;
    if (locState.date) {
      workTime.map((time) => {
        if (
          time.time.split(':')[1] ===
            `${
              locState.date!.getMinutes() < 10
                ? '0' + locState.date!.getMinutes()
                : locState.date!.getMinutes()
            }` &&
          time.date.split('.')[0] === `${locState.date!.getDate()}`
        )
          repeat = true;
      });
      if (repeat) setLocState({ ...locState, addDateError: ERROR_MESSAGE.ADD_DATE_ERROR });
      else {
        dispatch(
          profileDoctorAddDate(
            `${locState.date.getDate()}.${
              locState.date.getMonth() + 1
            }.${locState.date.getFullYear()} ${
              locState.date.getHours() < 10
                ? '0' + locState.date.getHours()
                : locState.date.getHours()
            }:${
              locState.date.getMinutes() < 10
                ? '0' + locState.date.getMinutes()
                : locState.date.getMinutes()
            }`,
             `/room/${v4()}`)
        );
        

        setLocState({ ...locState, date: null, addDateError: '' });
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
        {!workTime?.length ? (
          <span>Have not added time yet</span>
        ) : (
          workTime.map((dateTime) => (
            <ItemDoctorsFeature key={dateTime._id} deleteDate={deleteDate} {...dateTime} />
          ))
        )}
      </ContainerContent>

      <DateTimePickerWrapper>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Select date and time:"
            value={locState.date}
            onChange={(newValue: Date | null) => {
              setLocState({ ...locState, date: newValue });
            }}
            inputFormat="dd.MM.yyyy HH:mm a"
            shouldDisableDate={disableWeekends}
          />
        </LocalizationProvider>
        {locState.addDateError && <span>{locState.addDateError}</span>}
      </DateTimePickerWrapper>

      <Button disabled={!locState.date} onClick={addNewDate} round size="small" variant="outlined">
        add
      </Button>
    </TimeManagementContainer>
  );
};

export default WorkTimeManagement;
