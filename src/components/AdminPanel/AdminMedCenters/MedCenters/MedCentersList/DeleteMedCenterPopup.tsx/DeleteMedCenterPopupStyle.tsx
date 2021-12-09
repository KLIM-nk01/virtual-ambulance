import styled from 'styled-components';

export const DeleteMedCenterPopupWrapper = styled.div`
  width: 290px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    text-align: center;
  }
`;

export const ButtonBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 60px;
  }
`;
