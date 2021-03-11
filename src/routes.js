import React from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import UserView from './views/User/UserView';
import DashboardView from './views/DashboardView';
import RolesView from './views/RolesView';

const routes = [
  {
    path: '',
    element: <DashboardLayout />,
    children: [

      { path: 'users', element: <UserView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'roles', element: <RolesView /> },

    ]
  }];
export default routes;
