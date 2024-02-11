import { ChevronRight } from 'lucide-react'
import React from 'react'

type Status = 'paid' | 'pending' | 'draft' | 'late'

interface IInvoiceProps {
  id: string
  date: string
  customer: string
  price: string
  status: Status
}

export const Invoice: React.FunctionComponent<IInvoiceProps> = ({
  id,
  date,
  customer,
  price,
  status
}) => {
  return (
    <div className='grid grid-cols-2 p-6 border w-full rounded-md justify-between cursor-pointer'>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-stone-400'>
          <span className='text-stone-600'>#</span>
          {id}
        </p>
        <p className='text-muted-foreground'>{date}</p>
        <p className='text-muted-foreground'>{customer}</p>
      </div>
      <div className='flex items-center justify-end gap-5'>
        <p className='text-muted-foreground font-bold'>{price}</p>
        <div className={`flex items-center justify-center gap-2 p-3 ${status} rounded-md w-24`}>
          <span className='w-2 h-2 block rounded-full'></span>
          <p className='capitalize'>{status}</p>
        </div>
        <ChevronRight />
      </div>
    </div>
  )
}