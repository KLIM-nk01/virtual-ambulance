import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ScheduleActionTypes } from './types';
import { profilePatientAddAppointment } from '@store/actionCreators/profileData';
import {
  ScheduleWrapper,
  WrapperHeader,
  ItemWrapper,
  SuccessOrErrorMessage,
} from './ScheduleStyle';
import Button from '@components/common/Button/Button';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import Error from '@components/common/Error/Error';
import { initialState, scheduleReducer } from './ScheduleReducer';

export interface IScheduleProps {
  workTimeData: { date: string; time: string; _id: string }[];
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
    workTimeData.map((workTimeItem, index) => {
      if (stateSchedule.disabledItem === null || index === stateSchedule.disabledItem) {
        return (
          <ScheduleItem
            disabledButton={stateSchedule.disabledButton}
            setDisabledButton={scheduleDispatch}
            key={workTimeItem._id}
            stateSchedule={stateSchedule}
            workTimeItem={workTimeItem}
            index={index}
            dispatch={scheduleDispatch}
          />
        );
      } else {
        return (
          <ScheduleItem
            disabledButton={stateSchedule.disabledButton}
            setDisabledButton={scheduleDispatch}
            key={workTimeItem._id}
            disabled
            stateSchedule={stateSchedule}
            workTimeItem={workTimeItem}
            index={index}
            dispatch={scheduleDispatch}
          />
        );
      }
    });

  return (
    <ScheduleWrapper>
      <WrapperHeader>
        <span>Doctors schedule</span>
      </WrapperHeader>

      {!workTimeData?.length && <span>The doctor hasn't added a schedule yet.</span>}

      <ItemWrapper>{renderItem()}</ItemWrapper>

      {stateSchedule.viewSuccessMessage && (
        <SuccessOrErrorMessage>
          {error ? (
            <Error errorMessage={error} />
          ) : (
            `You have booked a ticket for ${stateSchedule.choiceWorkTime.time} on
            ${stateSchedule.choiceWorkTime.date}. Be healthy!`
          )}
        </SuccessOrErrorMessage>
      )}

      <Button onClick={viewDate} disabled={!stateSchedule.disabledButton} round variant="contained">
        Sign Up
      </Button>
    </ScheduleWrapper>
  );
};

export default Schedule;
