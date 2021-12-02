import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

interface IStyleProps {
  primary?: boolean;
  type?: string;
  error?: boolean;
  for?: string;
  fileName?: string;
  inputFileName?: string;
}

export const InputGroup = styled.div<IStyleProps>`
  position: relative;
  width: 100%;
  z-index: 0;

  input {
    height: 40px;
    width: 100%;
    border: none;
    border: 1px solid
      ${(props) => (props.error ? STYLE_CONSTANTS.COLORS.red : STYLE_CONSTANTS.COLORS.gray)};

    border-radius: 50px;
    padding: 5px 20px;
    background: inherit;
    transition: 0.3s;

    color: ${(props) =>
      props.primary ? STYLE_CONSTANTS.COLORS.black : STYLE_CONSTANTS.COLORS.white};
    z-index: 1;

    ${(props) =>
      props.type === 'file' &&
      `
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position:absolute;
      z-index: -1;

    `};

    ::placeholder {
      color: ${(props) =>
        props.primary ? STYLE_CONSTANTS.COLORS.black : STYLE_CONSTANTS.COLORS.white};
    }

    :focus {
      border-color: ${(props) =>
        props.primary ? STYLE_CONSTANTS.COLORS.blue : STYLE_CONSTANTS.COLORS.white};
      color: ${(props) =>
        props.primary ? STYLE_CONSTANTS.COLORS.black : STYLE_CONSTANTS.COLORS.white};
    }
  }

  label {
    color: ${(props) =>
      props.primary ? STYLE_CONSTANTS.COLORS.blue : STYLE_CONSTANTS.COLORS.white};
    transition: 0.3s;
    cursor: text;
    transition: all 200ms ease;
    font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
    margin-left: 10px;

    ${(props) =>
      props.type === 'file' &&
      `
      border: 1px ${props.inputFileName === 'Selected photo' ? 'dashed' : 'solid'} ${
        STYLE_CONSTANTS.COLORS.blue
      };
      margin: 0 auto;
      font-size: 14px;
      
      display: inline-block;
      cursor: pointer;
      padding: 20px;
      border-radius: 10px;

    `};
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

export const FileName = styled.span`
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.little};
  color: ${STYLE_CONSTANTS.COLORS.blue};
  margin-left: 10px;
`;
