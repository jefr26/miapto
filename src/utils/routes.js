import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import DashboardLayout from '../layouts/dashboard'
import MainLayout from '../layouts/main'

import Login from '../pages/login'
import NotFound from '../pages/notfound'
import Dashboard from '../pages/dashboard'

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      // { path: '/account', element: <Account /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
      // {
      //   path: 'member',
      //   element: <Outlet />,
      //   children: [
      //     { path: '/', element: <MemberGrid /> },
      //     { path: '/add', element: <AddMember /> },
      //   ],
      // },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export { routes }
