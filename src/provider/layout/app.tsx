import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export const AppLayout: React.FunctionComponent = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-4 bg-zinc-100 dark:bg-zinc-950">
        <Outlet />
      </div>
    </div>
  )
}
