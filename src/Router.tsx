import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/uz-lat' replace />,
  },
  {
    path: '/:lang',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])
