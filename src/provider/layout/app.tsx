import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayout: React.FunctionComponent = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col gap-4 p-8 pt-4 ">
        <Outlet />
      </div>
    </div>
  )
}
