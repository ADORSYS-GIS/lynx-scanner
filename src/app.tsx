import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { Notification } from './components/notification.tsx';

/**
 * The main application component.
 */
export function App(): JSX.Element {
  return (
    <div className="mx-auto max-w-screen-lg">
      <RouterProvider router={router} />
      <Notification />
    </div>
  );
}
