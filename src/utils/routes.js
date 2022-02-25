import * as React from 'react'
import { Navigate } from 'react-router-dom'

import DefaultLayout from '../layouts/default'
import MainLayout from '../layouts/main'

import Login from '../pages/login'
import NotFound from '../pages/notfound'
import Dashboard from '../pages/dashboard'

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? <DefaultLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
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
