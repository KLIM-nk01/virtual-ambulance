import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IStyleProps {
  primary?: boolean;
  type?: string;
}

export const InputGroup = styled.div<IStyleProps>`
  position: relative;
  ${(props) => {
    return props.type == 'checkbox' || props.type == 'radio'
      ? `
    width: 20px;
    height: 20px;
    `
      : `
    width: 300px;
    height: 40px;
    `;
  }}
  z-index: 0;
  margin: 10px 0;

  input:focus ~ label,
  input:valid ~ label {
    transform: translateY(-80%);
    font-size: 14px;
    background: ${(props) =>
      props.primary
        ? STYLE_CONSTANTS.COLORS.white
        : STYLE_CONSTANTS.COLORS.blue};
    border-radius: 50px;
    margin-left: 10px;
    z-index: 1;

    color: ${(props) =>
      props.primary
        ? STYLE_CONSTANTS.COLORS.blue
        : STYLE_CONSTANTS.COLORS.white};
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid ${STYLE_CONSTANTS.COLORS.gray};
    border-radius: 50px;
    padding: 10px 20px;
    background: inherit;
    transition: 0.3s;
    color: ${(props) =>
      props.primary
        ? STYLE_CONSTANTS.COLORS.blue
        : STYLE_CONSTANTS.COLORS.white};
    z-index: 1;

    :focus {
      border-color: ${(props) =>
        props.primary
          ? STYLE_CONSTANTS.COLORS.blue
          : STYLE_CONSTANTS.COLORS.white};
    }
  }

  label {
    position: absolute;
    top: 20%;
    left: 10px;
    color: ${(props) =>
      props.primary
        ? STYLE_CONSTANTS.COLORS.darkGrey
        : STYLE_CONSTANTS.COLORS.white};
    transition: 0.3s;
    cursor: text;
    transition: all 200ms ease;
    padding: 0 10px;
  }
`;
