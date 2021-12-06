import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { IMedCenterData, INewMedCenterData } from '@store/types/medCentersType';
import Input from '@components/common/Input/Input';
import { Photo, Required } from '@components/Form/SignInUp/formValidationConstants';
import {
  Form,
  FormButtonBar,
  FormSelect,
  FormSelectName,
  FormWrapper,
  MedCenterPhotoWrapper,
} from './MedCentersFormStyle';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { doctorsDirection } from '@data/doctorsDirection';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Button from '@components/common/Button/Button';
import TextArea from '@components/common/TextArea/TextArea';
import Portal from '@components/common/Portal/Portal';
import Modal from '@components/common/Modal/Modal';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import EditFormPopup from './FormPopup/FormPopup';
import Loader from '@components/common/Loader/Loader';

interface IMedCentersFormProps {
  submitFunction?: any;
  isEdit?: IMedCenterData;
}

const MedCentersForm: React.FC<IMedCentersFormProps> = ({ submitFunction, isEdit }) => {
  const [formState, setFormState] = useState<INewMedCenterData>(
    isEdit
      ? isEdit
      : {
          name: '',
          address: '',
          photo: '',
          description: '',
          services: [],
        }
  );
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const { error, loading } = useTypesSelector((state) => state.medCenter);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event: SelectChangeEvent<typeof formState.services>) => {
    const {
      target: { value },
    } = event;
    setFormState({
      ...formState,
      services: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const submitForm = (submitData: INewMedCenterData) => {
    submitData.services = formState.services;

    if (isEdit) {
      submitData._id = isEdit?._id;
      dispatch(submitFunction(submitData));
    } else dispatch(submitFunction(submitData));
    if (!loading) {
      setModalActive(!modalActive);
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Input
          primary
          label="Name"
          name="name"
          register={register('name', Required)}
          errors={errors}
          value={formState.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormState({ ...formState, name: e.target.value })
          }
        />
        <Input
          primary
          label="Address"
          name="address"
          register={register('address', Required)}
          errors={errors}
          value={formState.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormState({ ...formState, address: e.target.value })
          }
        />

        <MedCenterPhotoWrapper>
          <Input
            primary
            type="file"
            name="photo"
            register={register('photo', isEdit ? undefined : Photo)}
            label="Select Photo"
            errors={errors}
            id={'photo'}
          />
          {isEdit && <img src={isEdit.photo} alt="medCenter Photo" />}
        </MedCenterPhotoWrapper>
        {loading && <Loader />}
        <TextArea
          name="description"
          register={register('description', Required)}
          label="Description"
          value={formState.description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFormState({ ...formState, description: e.target.value })
          }
        />

        <FormSelect>
          <FormSelectName>Services: </FormSelectName>
          <FormControl sx={{ m: 1, width: 300 }}>
            <Select
              multiple
              value={formState.services}
              onChange={handleChange}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {doctorsDirection.map(({ direction, id_direction }) => (
                <MenuItem key={id_direction} value={direction}>
                  {direction}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormSelect>

        <FormButtonBar>
          <Button round type="submit">
            {isEdit ? 'Edit' : 'Create new'}
          </Button>
        </FormButtonBar>
      </Form>

      <Portal>
        <Modal active={modalActive} setActive={setModalActive}>
          <EditFormPopup
            message={
              isEdit ? 'Data saved successfully!' : 'The medical center was created successfully!'
            }
          />
        </Modal>
      </Portal>
    </FormWrapper>
  );
};

export default MedCentersForm;
