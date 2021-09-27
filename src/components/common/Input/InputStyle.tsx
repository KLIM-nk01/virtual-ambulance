import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const InputGroup = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
  z-index: 0;

  input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-80%);
    font-size: 14px;
    background: ${STYLE_CONSTANTS.COLORS.blue};
    border-radius: 50px;
    margin-left: 10px;
    z-index: 1;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid ${STYLE_CONSTANTS.COLORS.gray};
    border-radius: 50px;
    color: ${STYLE_CONSTANTS.COLORS.darkGrey};
    padding: 10px 20px;
    background: inherit;
    transition: 0.3s;
    color: white;
    z-index: 1;
  }

  label {
    position: absolute;
    top: 20%;
    left: 10px;
    color: ${STYLE_CONSTANTS.COLORS.white};
    transition: 0.3s;
    cursor: text;
    transition: all 200ms ease;
    padding: 0 10px;
  }
`;
