import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

/**
 * The main application component.
 */
export function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
