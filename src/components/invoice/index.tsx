import { ChevronRight } from 'lucide-react'
import React from 'react'

export const Invoice: React.FunctionComponent = () => {
  return (
    <div className='grid grid-cols-2 p-6 border w-full rounded-md justify-between cursor-pointer'>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-stone-400'>
          <span className='text-stone-600'>#</span>
          RT3080
        </p>
        <p className='text-muted-foreground'>Due  19 Aug 2021</p>
        <p className='text-muted-foreground'>Jensen Huang</p>
      </div>
      <div className='flex items-center justify-end gap-5'>
        <p className='text-muted-foreground font-bold'>$ 1,800.90</p>
        <div className='flex items-center justify-center gap-2 p-3 bg-emerald-100 rounded-md w-24'>
          <div className='w-2 h-2 bg-emerald-600 rounded-full'></div>
          <p className='text-emerald-600'>Paid</p>
        </div>
        <ChevronRight />
      </div>
    </div>
  )
}