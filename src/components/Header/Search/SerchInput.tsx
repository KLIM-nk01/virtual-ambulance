import styled from "styled-components";

export const SearchInput = styled.input`
  height: 40px;
  width: 25%;
  color: white;
  background: inherit;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 5px white;
  
  padding: 20px;
  
  font-size: 16px;
  
  ::placeholder {
    color: white;
    opacity: 0.5;
  }
  
  :focus {
    ::placeholder {
      color: transparent;
    }
    
  }
`