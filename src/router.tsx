import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { FloatingConfig } from '@components/floating-config.tsx';

export const router = createBrowserRouter([
  {
    element: (
      <div>
        <FloatingConfig />
        <div className="flex flex-col gap-2 md:gap-4">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: '/scans',
        element: (
          <div className="p-4">
            <div className="flex flex-col gap-2 md:gap-4">
              <Outlet />
            </div>
          </div>
        ),
        children: [
          {
            path: 'add',
            lazy: () => import('@screens/scan.screen'),
          },
          {
            path: '',
            lazy: () => import('@screens/scan-list.screen'),
          },
        ],
      },
      {
        path: '/config',
        children: [
          {
            path: '',
            lazy: () => import('@screens/app-config.screen'),
          },
          {
            path: 'scan',
            lazy: () => import('@screens/scan-config.screen'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    Component: () => <Navigate to="/config" replace={true} />,
  },
]);
