import React, { useState } from 'react';
import Button from '@components/common/Button/Button';
import ItemDoctorsFeature from '../ItemDoctorsFeature';
import { ContainersName, ContainerFooter, ContainerContent } from '../ManagementStyle';
import {
  TimeManagementContainer,
  DateTimePickerWrapper,
  AddButton,
} from './WorkTimeManagementStyle';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const WorkTimeManagement: React.FC = () => {
  const [date, setDate] = React.useState<Date | null>(null);
  const [dateItem, setDateItem] = useState()
  
  const minTime: Date = new Date('01/01/2021 08:30 AM');
  const maxTime: Date = new Date('01/01/2021 06:00 PM');
  
  const addDate = () => {
    date ? console.log(date) : console.log('Select time!');
  };
  const disableWeekends = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };
 
  return (
    <TimeManagementContainer>
      <ContainersName>Work Time</ContainersName>

      <ContainerContent>
        <ItemDoctorsFeature />
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
            inputFormat="dd.MM.yyyy hh:mm a"
            minutesStep={5}
            shouldDisableDate={disableWeekends}
            minTime={minTime}
            maxTime={maxTime}
          />
        </LocalizationProvider>
        {date ? (
          <Button onClick={() => addDate()} round size="small" variant="outlined">
            add
          </Button>
        ) : (
          <Button disabled onClick={() => addDate()} round size="small" variant="outlined">
            add
          </Button>
        )}
      </DateTimePickerWrapper>
    </TimeManagementContainer>
  );
};

export default WorkTimeManagement;
