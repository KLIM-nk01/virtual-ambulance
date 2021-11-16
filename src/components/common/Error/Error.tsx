import React from 'react';
import { ErrorContent, ErrorWrapper } from './ErrorStyle';
import ErrorImg from '@assets/Error.png';

interface IErrorProps {
  errorMessage: string;
}

const Error: React.FC<IErrorProps> = ({ errorMessage }) => {
  return (
    <ErrorWrapper>
      <ErrorContent>
        <img src={ErrorImg} alt="Error icon" />
        <span>{errorMessage}</span>
      </ErrorContent>
    </ErrorWrapper>
  );
};

export default Error;
