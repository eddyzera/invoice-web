import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayoutProvider: React.FunctionComponent = () => {
  return (
    <div>
      <header>header</header>
      <Outlet />
    </div>
  )
}
