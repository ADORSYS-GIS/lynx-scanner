import { CameraInput } from '@components/camera-input';
import React from 'react';
import { Header } from '../components/header.tsx';

/**
 * Scan screen
 * @constructor React.FC
 */
export const Component: React.FC = () => {
  return (
    <>
      <Header title='Scan' back='..' />
      <div className='bg-base-100'>
        <CameraInput name='image' />
      </div>
    </>
  );
};
