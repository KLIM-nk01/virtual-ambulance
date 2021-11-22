import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ScheduleActionTypes } from './types';
import { profilePatientAddAppointment } from '@store/actionCreators/profileData';
import { ScheduleWrapper, WrapperHeader, ItemWrapper, Message } from './ScheduleStyle';
import Button from '@components/common/Button/Button';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import { initialState, scheduleReducer } from './ScheduleReducer';

export interface IScheduleProps {
  workTimeData: { date: string; time: string; _id: string; patientData: string }[];
}

const Schedule: React.FC<IScheduleProps> = ({ workTimeData }) => {
  const [stateSchedule, scheduleDispatch] = useReducer(scheduleReducer, initialState);
  const { error } = useTypesSelector((state) => state.profile);
  const dispatch = useDispatch();

  const sendWorkTime = () => {
    scheduleDispatch({ type: ScheduleActionTypes.SUCCESS_MESSAGE });
  };

  const viewDate = () => {
    dispatch(profilePatientAddAppointment(stateSchedule.choiceWorkTime._id));
    sendWorkTime();
  };

  const renderItem = () =>
    workTimeData.map((workTimeItem) => {
      return (
        <ScheduleItem
          disabledButton={stateSchedule.disabledButton}
          setDisabledButton={scheduleDispatch}
          key={workTimeItem._id}
          stateSchedule={stateSchedule}
          workTimeItem={workTimeItem}
          scheduleDispatch={scheduleDispatch}
          disabled={
            (!!stateSchedule.disabledItem && stateSchedule.disabledItem !== workTimeItem._id) ||
            !!workTimeItem.patientData
          }
        />
      );
    });

  return (
    <ScheduleWrapper>
      <WrapperHeader>
        <span>Doctors schedule</span>
      </WrapperHeader>

      {!workTimeData?.length && <span>The doctor hasn't added a schedule yet.</span>}

      <ItemWrapper>{renderItem()}</ItemWrapper>

      {stateSchedule.viewSuccessMessage && (
        <Message>
          {error ||
            `You have booked a ticket for ${stateSchedule.choiceWorkTime.time} on
                  ${stateSchedule.choiceWorkTime.date}. Be healthy!`}
        </Message>
      )}

      <Button onClick={viewDate} disabled={!stateSchedule.disabledButton} round variant="contained">
        Sign Up
      </Button>
    </ScheduleWrapper>
  );
};

export default Schedule;
