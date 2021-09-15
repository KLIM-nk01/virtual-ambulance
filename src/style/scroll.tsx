import styled, {css} from "styled-components";

export const scroll = css`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    height: 70px;
    background-color: #d3d3d3;
    border-radius: 10px;
  }
`