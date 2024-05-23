import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dashboard } from '@/page/app/dashboard'
import { SignIn } from '@/page/auth/signIn'
import { SignUp } from '@/page/auth/signUp'

import { AppLayout } from '../layout/app'
import { AuthLayout } from '../layout/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])

export const ThemeRouter: React.FunctionComponent = () => {
  return <RouterProvider router={router} />
}
