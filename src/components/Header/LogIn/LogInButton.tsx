import styled from "styled-components";
import {flex} from "../../../style/flex";

export const LogInButton = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 50px;
  ${flex};
  justify-content: center;
  color: black;
  border: none;
  transition: 0.5s;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  

  :hover {
    background: #6bc148;
    color: white;
    box-shadow: 0.4em 0.4em 5px rgba(69, 68, 68, 0.5);
  }
`
