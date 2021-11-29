import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@components/common/Input/Input';
import { Required } from './FormValidationConst';
import {
  Form,
  FormButtonBar,
  FormSelect,
  FormSelectName,
  FormWrapper,
} from './MedCentersFormStyle';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { doctorsDirection } from '@data/doctorsDirection';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Button from '@components/common/Button/Button';

const MedCentersForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [services, setServices] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof services>) => {
    const {
      target: { value },
    } = event;
    setServices(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormWrapper>
      <Form>
        <Input
          primary
          label="Name"
          name="name"
          register={register('name', Required)}
          errors={errors}
        />
        <Input
          primary
          label="Address"
          name="address"
          register={register('address', Required)}
          errors={errors}
        />
        <Input
          primary
          label="Latitude"
          name="latitude"
          register={register('latitude', Required)}
          errors={errors}
        />
        <Input
          primary
          label="Longitude"
          name="longitude"
          register={register('longitude', Required)}
          errors={errors}
        />
        <Input
          primary
          type="file"
          name="photo"
          register={register('photo')}
          label="Select Photo"
          errors={errors}
          id={'photo'}
        />

        <Input
          primary
          label="Description"
          name="description"
          register={register('description', Required)}
          errors={errors}
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
                <MenuItem key={direction.direction} value={direction.direction}>
                  {direction.direction}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormSelect>
      </Form>

      <FormButtonBar>
        <Button round type="submit">
          Edit
        </Button>
        <Button round type="submit">
          Create new
        </Button>
      </FormButtonBar>
    </FormWrapper>
  );
};

export default MedCentersForm;
