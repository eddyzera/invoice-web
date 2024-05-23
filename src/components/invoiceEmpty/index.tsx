import React from 'react'

import { EmptyInvoice } from '../svg'

export const InvoiceEmpty: React.FunctionComponent = () => {
  return (
    <div className="mx-0 my-auto">
      <EmptyInvoice className="mx-auto my-0 w-96 h-96" />
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-4xl">There is nothing here</h2>
        <p className="text-center">
          Create an invoice by clicking the <br /> New Invoice button and get
          started
        </p>
      </div>
    </div>
  )
}
