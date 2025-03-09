import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Header } from '../components/header.tsx';

/**
 * Single scan screen
 * @constructor React.FC
 */
export const Component: React.FC = () => {
  const params = useParams<{ scanId: string }>();
  const { state } = useLocation();
  const isModal = !!state?.background;

  return (
    <>
      {!isModal && <Header title='Single Scan' back='..' />}
      Some single scan page for {params.scanId}
    </>
  );
};
