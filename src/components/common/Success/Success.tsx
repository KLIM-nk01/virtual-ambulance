import React from 'react';
import { SuccessContent, SuccessWrapper } from './SuccessStyle';

interface ISuccessProps {
  successMessage: string;
}

const Success: React.FC<ISuccessProps> = ({ successMessage }) => {
  return (
    <SuccessWrapper>
      <SuccessContent>
        <span>{successMessage}</span>
      </SuccessContent>
    </SuccessWrapper>
  );
};

export default Success;
