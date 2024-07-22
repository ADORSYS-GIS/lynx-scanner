import { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { FloatingConfig } from './components/floating-config.tsx';

/**
 * The main application component.
 */
export function App(): JSX.Element {
  return (
    <>
      <FloatingConfig />
      <RouterProvider router={router} />
    </>
  );
}
