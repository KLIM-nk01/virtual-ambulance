import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 10px 0;
    flex-direction: column;
    a {
      display: block;
      margin: 10px 0;
    }
  }
`;
