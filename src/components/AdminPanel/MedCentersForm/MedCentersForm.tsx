import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { INewMedCenterData } from '@store/types/medCentersType';
import Input from '@components/common/Input/Input';
import { Photo, Required } from './FormValidationConst';
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

interface IMedCentersFormProps {
  submitFunction?: any;
}

const MedCentersForm: React.FC<IMedCentersFormProps> = ({ submitFunction }) => {
  const [formState, setFormState] = useState<INewMedCenterData>({
    name: '',
    address: '',
    photo: '',
    description: '',
    services: [],
  });

  const dispatch = useDispatch();

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

  const onSubmit = (data: INewMedCenterData) => {
    data.services = formState.services;
    dispatch(submitFunction(data));
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
            register={register('photo', Photo)}
            label="Select Photo"
            errors={errors}
            id={'photo'}
          />
        </MedCenterPhotoWrapper>

        <TextArea
          name="description"
          register={register('description', Required)}
          label="Description"
          onKeyUp={(e: React.ChangeEvent<HTMLInputElement>) =>
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
            Edit
          </Button>
          <Button round type="submit">
            Create new
          </Button>
        </FormButtonBar>
      </Form>
    </FormWrapper>
  );
};

export default MedCentersForm;
