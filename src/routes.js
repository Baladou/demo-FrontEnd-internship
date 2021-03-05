import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import CustomerListView from './views/customer/CustomerListView';
import DashboardView from './views/DashboardView';
import RolesView from './views/RolesView';
import TestDataGrid from './views/Test/TestDataGrid'


const routes = [
  {
    path: '',
    element: <DashboardLayout />,
    children: [

      { path: 'users', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'roles', element: <RolesView /> },
      { path: 'test', element: <TestDataGrid /> },

    ]
  }
];

export default routes;
