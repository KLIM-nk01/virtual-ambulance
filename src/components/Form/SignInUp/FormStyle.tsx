import { STYLE_CONSTANTS } from '@constants/styleConstants';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 450px;
  height: fit-content;
  min-height: 300px;

  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  background: ${STYLE_CONSTANTS.COLORS.white};

  border-right: 10px solid ${STYLE_CONSTANTS.COLORS.blue};
  box-shadow: 0px 0px 20px 5px ${STYLE_CONSTANTS.COLORS.gray};
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  div {
    margin-top: 15px;
  }

  a {
    span {
      margin-left: 5px;
      font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
      :hover {
        color: ${STYLE_CONSTANTS.COLORS.blue};
      }
    }
    margin-bottom: 10px;
  }
  hr {
    width: 100%;
  }
`;

export const DoctorCheckButton = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 10px;
    cursor: pointer;

    :hover {
      color: ${STYLE_CONSTANTS.COLORS.blue};
    }
  }
`;

export const FormName = styled.span`
  color: ${STYLE_CONSTANTS.COLORS.blue};
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
`;

export const ButtonBar = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  button {
    margin-right: 10px;
  }
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  border-top: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
  padding-top: 10px;
  margin: 10px 0;
  span {
    margin-left: 5px;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  }
`;

export const MedCentersSelect = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid ${STYLE_CONSTANTS.COLORS.gray};
`;
