import { Notification } from '@components/notification';
import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

/**
 * The main application component.
 */
export function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
      <Notification />
    </>
  );
}
