import styled from 'styled-components';

interface IProps {
  active: boolean;
}

export const ModalWrapper = styled.div<IProps>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  ${(props) =>
    props.active &&
    `opacity: 1; 
     pointer-events: all;`}
  transform: 0.5s;
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 15px;
  background: white;
  width: 200px;
  height: 200px;
`;
