import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/scans',
    children: [
      {
        path: 'add',
        lazy: () => import('./components/scan.screen'),
      },
      {
        path: '',
        lazy: () => import('./components/scan.screen'),
      },
    ],
  },
  {
    path: '/config',
    lazy: () => import('./components/app-config.screen'),
  },
  {
    path: '*',
    Component: () => <Navigate to="/config" replace={true} />,
  },
]);
