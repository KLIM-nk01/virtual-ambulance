import { STYLE_CONSTANTS } from '@constants/styleConstants';

export const scroll = `
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    height: 70px;
    background-color:${STYLE_CONSTANTS.COLORS.smokyWhite};
    border-radius: 10px;
  }
`;
