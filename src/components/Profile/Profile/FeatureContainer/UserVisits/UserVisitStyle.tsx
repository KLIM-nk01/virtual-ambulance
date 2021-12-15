import styled from 'styled-components';
import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const VisitContainer = styled.div`
  position: relative;
  width: 100%;
  border-top: 2px solid ${STYLE_CONSTANTS.COLORS.gray};
  padding: 25px 10px;
  display: flex;
  flex-wrap: wrap;

  span {
    a {
      color: ${STYLE_CONSTANTS.COLORS.blue};
    }
  }
`;

export const ContainerName = styled.span`
  position: absolute;
  text-transform: uppercase;
  color: ${STYLE_CONSTANTS.COLORS.blue};
  font-weight: 600;
  top: -15px;
  left: 30px;
  background: ${STYLE_CONSTANTS.COLORS.white};
  padding: 0 20px;
  font-size: ${STYLE_CONSTANTS.FONT_SIZE.large};
`;

export const ErrorMessage = styled.span`
  margin: 0 auto;
  text-align: center;
  color: ${STYLE_CONSTANTS.COLORS.red};

  a {
    color: ${STYLE_CONSTANTS.COLORS.red};
    text-decoration: underline;
    padding-bottom: 5px;
    
    :hover {
      color: ${STYLE_CONSTANTS.COLORS.blue};
    }
  }
`;
