import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export const AppLayoutProvider: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
