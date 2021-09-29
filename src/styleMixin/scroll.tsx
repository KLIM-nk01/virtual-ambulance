import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const scroll = `
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    height: 70px;
    background-color:${STYLE_CONSTANTS.COLORS.gray};
    border-radius: 5px;
    
  }
`;
