import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '@components/common/Input/Input';
import { Required } from './FormValidationConst';
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
import { IEditForm } from '../../AdminMedCenters';
import TextArea from '@components/common/TextArea/TextArea';

interface IMedCentersForm {
  editFormData: IEditForm;
  setEditFormData: (value: IEditForm) => void;
}

const MedCentersForm: React.FC<IMedCentersForm> = ({ editFormData, setEditFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [services, setServices] = React.useState<string[]>(
    editFormData.medCenterData?.services || []
  );

  const handleChange = (event: SelectChangeEvent<typeof services>) => {
    const {
      target: { value },
    } = event;
    setServices(typeof value === 'string' ? value.split(',') : value);
  };

  const onSubmit = (data: any) => {
    data.services = services;
    console.log(data);
  };

  const [formState, setFormState] = useState(editFormData.medCenterData);
 
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          primary
          label="Name"
          name="name"
          register={register('name', Required)}
          errors={errors}
          value={formState?.name}
          // onChange={(event:  React.ChangeEvent<HTMLInputElement>) => 
          //   setFormState({...formState, name: event.target.value})}
        />
        <Input
          primary
          label="Address"
          name="address"
          register={register('address', Required)}
          errors={errors}
          value={editFormData.medCenterData?.address}
        />
        <Input
          primary
          label="Latitude"
          name="latitude"
          register={register('latitude', Required)}
          errors={errors}
          value={editFormData.medCenterData?.location.lat}
        />
        <Input
          primary
          label="Longitude"
          name="longitude"
          register={register('longitude', Required)}
          errors={errors}
          value={editFormData.medCenterData?.location.lon}
        />

        <MedCenterPhotoWrapper>
          {editFormData.medCenterData?.photo && (
            <img src={editFormData.medCenterData?.photo} alt="MedCenterPhoto" />
          )}

          <Input
            primary
            type="file"
            name="photo"
            register={register('photo')}
            label="Select Photo"
            errors={errors}
            id={'photo'}
          />
        </MedCenterPhotoWrapper>

        <TextArea
          value={editFormData.medCenterData?.description}
          name="description"
          register={register('description', Required)}
          label="Description"
        />

        <FormSelect>
          <FormSelectName>Services: </FormSelectName>
          <FormControl sx={{ m: 1, width: 300 }}>
            <Select
              multiple
              value={services}
              onChange={handleChange}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {doctorsDirection.map((direction) => (
                <MenuItem key={direction.id_direction} value={direction.direction}>
                  {direction.direction}
                </MenuItem>
              ))}
            </Select>
            {/* <Controller
              name="services"
              control={control}
              rules={{ required: 'Please select a place where you work.' }}
              render={({ field }) => (
                <Select
                  {...field}
                  multiple
                  value={services}
                  onChange={handleChange}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {doctorsDirection.map((direction) => (
                    <MenuItem key={direction.id_direction} value={direction.direction}>
                      {direction.direction}
                    </MenuItem>
                  ))}
                </Select>
              )}
            /> */}
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
