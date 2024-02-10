import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppLayoutProvider: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <h1>header</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
