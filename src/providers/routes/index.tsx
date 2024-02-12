import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dashboard } from '@/pages/app/dashboard'
import { InvoiceData } from '@/pages/app/invoiceData'
import { SignIn } from '@/pages/auth/signIn'
import { SignUp } from '@/pages/auth/signUp'
import { AppLayoutProvider } from '@/providers/layout/app'
import { AuthLayoutProvider } from '@/providers/layout/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayoutProvider />,
    children: [{ path: '/', element: <Dashboard /> }, { path: '/invoice', element: <InvoiceData /> }],
  },

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
