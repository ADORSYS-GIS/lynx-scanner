import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/scans',
    element: (
      <div className="p-4">
        <Outlet />
      </div>
    ),
    children: [
      {
        path: 'add',
        lazy: () => import('./screens/scan.screen'),
      },
      {
        path: '',
        lazy: () => import('./screens/scan-list.screen'),
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
