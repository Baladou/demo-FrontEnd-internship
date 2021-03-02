import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import CustomerListView from './views/customer/CustomerListView';
import DashboardView from './views/DashboardView';
import RolesView from './views/RolesView';



const routes = [
  {
    path: '',
    element: <DashboardLayout />,
    children: [
     
      { path: 'users', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'roles', element: <RolesView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
