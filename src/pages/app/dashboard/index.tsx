import { Invoice } from '@/components/invoice'
import React from 'react'

export const Dashboard: React.FunctionComponent = () => {
  return (
    <div className='flex items-center flex-col gap-4 justify-center pt-16 max-w-4xl m-auto'>
      <Invoice id='RT3080' date='Due  19 Aug 2021' customer='Jensen Huang' price='£ 1,800.90' status={'paid'} />
      <Invoice id='RT3080' date='Due  19 Aug 2021' customer='Jensen Huang' price='£ 1,800.90' status={'pending'} />
      <Invoice id='RT3080' date='Due  19 Aug 2021' customer='Jensen Huang' price='£ 1,800.90' status={'late'} />
      <Invoice id='RT3080' date='Due  19 Aug 2021' customer='Jensen Huang' price='£ 1,800.90' status={'draft'} />
    </div>
  )
}
