import styled from 'styled-components';

export const LogOutWrapper = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 100%;
    border-radius: 50px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 160px;
  }
`;
