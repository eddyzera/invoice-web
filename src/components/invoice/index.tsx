import { ChevronRight } from 'lucide-react'
import React from 'react'
import { StatusType, Status } from '../status'



interface IInvoiceProps {
  id: string
  date: string
  customer: string
  price: string
  status: StatusType
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
        <Status statusType={status}  />
        <ChevronRight />
      </div>
    </div>
  )
}