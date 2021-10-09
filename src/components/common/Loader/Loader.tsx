import React from 'react';
import { LoaderWrapper, Wrapper } from './LoaderStyle';

const Loader: React.FC = () => {
  return (
    <Wrapper>
      <LoaderWrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderWrapper>
    </Wrapper>
  );
};

export default Loader;
