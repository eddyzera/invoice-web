import React from 'react'

export type StatusType = 'paid' | 'pending' | 'draft' | 'late'

interface IStatusProps {
  statusType: StatusType
}

export const Status: React.FunctionComponent<IStatusProps> = ({ statusType }) => {
  return (
    <div className={`flex items-center justify-center gap-2 p-3 ${statusType} rounded-md w-24`}>
      <span className='w-2 h-2 block rounded-full'></span>
      <p className='capitalize text-sm'>{statusType}</p>
    </div>
  )
}