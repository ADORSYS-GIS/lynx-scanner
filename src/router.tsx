import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { FloatingConfig } from './components/floating-config.tsx';

export const router = createBrowserRouter([
  {
    element: (
      <div>
        <FloatingConfig />
        <Outlet />
      </div>
    ),
    children: [
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
    ],
  },
  {
    path: '*',
    Component: () => <Navigate to="/config" replace={true} />,
  },
]);
