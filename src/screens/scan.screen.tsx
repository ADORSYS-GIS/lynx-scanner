import React from 'react';
import { Header } from '../components/header.tsx';

export const Component: React.FC = () => {
  return (
    <>
      <Header title="Scan" back={true} />
      <div className="bg-base-100">TODO: Form & Camera will be here</div>
    </>
  );
};
