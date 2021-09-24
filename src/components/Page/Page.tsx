import React from 'react';
import { PageWrapper } from './PageStyle';

const Page: React.FC = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default Page;
