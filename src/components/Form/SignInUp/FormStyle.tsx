import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IFormProps {
  enctype?: string;
}

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

export const Form = styled.form<IFormProps>`
  position: relative;
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
      font-size: ${STYLE_CONSTANTS.FONT_SIZE.small};
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
    width: 100%;
    margin: 15px 0;
  }
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 10px;
  margin-top: 10px;
  
  span {
    margin-left: 5px;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
    color: ${STYLE_CONSTANTS.COLORS.blue};
  }
  
  p {
    margin: 0;
    padding: 0;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.veryLittle};
    color: ${STYLE_CONSTANTS.COLORS.red};
    margin-top: 5px;
    margin-left: 10px;
    
    ::before {
      display: inline;
      content: '⚠ ';
    }
  }
`;

export const MedCentersSelect = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid ${STYLE_CONSTANTS.COLORS.gray};
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  
  div {
    margin: 0;
  }
`;