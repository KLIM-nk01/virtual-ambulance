import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';
import { Box } from '@mui/system';
import { FormControl } from '@mui/material';

export const FormWrapper = styled.div`
  width: 90%;
  height: fit-content;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(1fr);
  row-gap: 20px;

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    width: 400px;
  }
`;

export const FormSelect = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormSelectName = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
`;

export const FormButtonBar = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  button {
    width: 100%;
  }
`;

export const MedCenterPhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 255px;
    margin-right: 20px;

    @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
      margin-top: 15px;
    }
  }

  @media (max-width: ${STYLE_CONSTANTS.SCREEN.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const FormControlWrapper = styled(FormControl)`
  width: 100%;
`;

export const BoxWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  div {
    margin: 3px 5px;
  }
`;
