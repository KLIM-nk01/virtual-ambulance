import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ActionType, IScheduleInitialState, ScheduleActionTypes } from './types';
import { profilePatientAddAppointment } from '@store/actionCreators/profileData';
import { ScheduleWrapper, WrapperHeader, ItemWrapper, SuccessMessage } from './ScheduleStyle';
import Button from '@components/common/Button/Button';
import ScheduleItem from './ScheduleItem/ScheduleItem';
import Error from '@components/common/Error/Error';

export interface IScheduleProps {
  workTimeData: { date: string; time: string; _id: string }[];
}

const initialState = {
  choiceWorkTime: {
    date: '',
    time: '',
    _id: '',
  },
  disabledItem: null,
  disabledButton: false,
  zeroing: false,
  viewSuccessMessage: false,
};

const reducer = (state: IScheduleInitialState, action: ActionType): IScheduleInitialState => {
  switch (action.type) {
    case ScheduleActionTypes.SET_CHOICE_WORK_TIME:
      return {
        ...state,
        viewSuccessMessage: false,
        choiceWorkTime: {
          ...action.payload,
        },
      };
    case ScheduleActionTypes.SET_DISABLED_ITEM:
      return { ...state, viewSuccessMessage: false, disabledItem: action.payload.disabledItem };
    case ScheduleActionTypes.SUCCESS_MESSAGE:
      return { ...state, viewSuccessMessage: true };
    case ScheduleActionTypes.SET_DISABLED_BUTTON:
      return { ...state, disabledButton: !state.disabledButton };
    default:
      return state;
  }
};

const Schedule: React.FC<IScheduleProps> = ({ workTimeData }) => {
  const [stateSchedule, dispatchLock] = useReducer(reducer, initialState);
  const { error } = useTypesSelector((state) => state.profile);

  const sendWorkTime = () => {
    dispatchLock({ type: ScheduleActionTypes.SUCCESS_MESSAGE });
  };

  const viewDate = () => {
    dispatch(profilePatientAddAppointment(stateSchedule.choiceWorkTime._id));
    sendWorkTime();
  };
  const dispatch = useDispatch();

  const renderItem = () =>
    workTimeData.map((workTimeItem, index) => {
      if (stateSchedule.disabledItem === null || index === stateSchedule.disabledItem) {
        return (
          <ScheduleItem
            disabledButton={stateSchedule.disabledButton}
            setDisabledButton={dispatchLock}
            key={workTimeItem._id}
            stateSchedule={stateSchedule}
            workTimeItem={workTimeItem}
            index={index}
            dispatch={dispatchLock}
          />
        );
      } else {
        return (
          <ScheduleItem
            disabledButton={stateSchedule.disabledButton}
            setDisabledButton={dispatchLock}
            key={workTimeItem._id}
            disabled
            stateSchedule={stateSchedule}
            workTimeItem={workTimeItem}
            index={index}
            dispatch={dispatchLock}
          />
        );
      }
    });

  return (
    <ScheduleWrapper>
      <WrapperHeader>
        <span>Doctors schedule</span>
      </WrapperHeader>

      {workTimeData.length == 0 && <span>The doctor hasn't added a schedule yet.</span>}

      <ItemWrapper>{renderItem()}</ItemWrapper>

      {stateSchedule.viewSuccessMessage && (
        <SuccessMessage>
          {error ? (
            <Error errorMessage={error} />
          ) : (
            `You have booked a ticket for ${stateSchedule.choiceWorkTime.time} on
            ${stateSchedule.choiceWorkTime.date}. Be healthy!`
          )}
        </SuccessMessage>
      )}
      
    <Button disabled={!stateSchedule.disabledButton } round variant="contained">
          Sign Up
        </Button>
      
    </ScheduleWrapper>
  );
};

export default Schedule;
