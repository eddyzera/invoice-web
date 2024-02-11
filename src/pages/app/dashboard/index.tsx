import { Invoice } from '@/components/invoice'
import React from 'react'

export const Dashboard: React.FunctionComponent = () => {
  return (
    <div className='flex items-center flex-col gap-4 justify-center pt-16 max-w-4xl m-auto'>
      <Invoice />
      <Invoice />
      <Invoice />
    </div>
  )
}
