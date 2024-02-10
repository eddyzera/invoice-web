import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { SignIn } from '@/pages/auth/signIn'
import { SignUp } from '@/pages/auth/signUp'
import { AuthLayoutProvider } from '@/providers/layout/auth'

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <AppLayout />,
  //   children: [{ path: '/', element: <Dashboard /> }],
  // },

  {
    path: '/',
    element: <AuthLayoutProvider />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])

export const RouterProviderApp = () => <RouterProvider router={router} />
