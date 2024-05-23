import { Plus } from 'lucide-react'
import React from 'react'

import { InvoiceEmpty } from '@/components/invoiceEmpty'
import { Button } from '@/components/ui/button'

export const Dashboard: React.FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl">Invoice</h1>
          <span className="text-sm">No invoices</span>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-600/90 gap-2">
          <Plus className="h-5 w-5" />
          New Invoice
        </Button>
      </div>
      <InvoiceEmpty />
    </div>
  )
}
