import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/scans',
    children: [
      {
        path: 'add',
        lazy: () => import('./screens/scan.screen'),
      },
      {
        path: '',
        lazy: () => import('./screens/scan.screen'),
      },
    ],
  },
  {
    path: '/config',
    lazy: () => import('./screens/app-config.screen'),
  },
  {
    path: '*',
    Component: () => <Navigate to="/config" replace={true} />,
  },
]);
