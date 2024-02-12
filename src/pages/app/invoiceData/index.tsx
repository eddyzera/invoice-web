import { Status } from '@/components/status'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from '@/components/ui/table'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

export const InvoiceData: React.FunctionComponent = () => {
  return (
    <div className='flex items-center flex-col gap-4 justify-center pt-8 max-w-4xl m-auto'>
      <div className='flex items-start justify-start w-full'>
        <div className='flex items-center cursor-pointer py-8'>
          <Button variant={'ghost'} className='flex items-center capitalize'>
            <ChevronLeft />
            go back
          </Button>
        </div>
      </div>
      <div className='border w-full p-6 rounded-md flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <p>Status :</p>
          <Status statusType='pending' />
        </div>
        <div className='flex items-center gap-3'>
          <Button className='p-6 bg-stone-800 text-stone-400 hover:bg-stone-800/60'>Edit</Button>
          <Button className='p-6 bg-red-800 text-red-400 hover:bg-red-900/60'>Delete</Button>
          <Button className='p-6' variant={'pending'}>Mark as pending</Button>
        </div>
      </div>
      <div className='border w-full p-6 rounded-md'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-bold text-stone-400'>
              <span className='text-stone-600'>#</span>
              XM9141
            </p>
            <p className='text-sm text-foreground'>Graphic Design</p>
          </div>
          <div>
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className='grid grid-cols-3 my-4'>
          <div className='flex flex-col justify-start gap-1'>
            <span className='text-sm text-stone-500'>Invoice Date</span>
            <p className='text-md text-foreground'>21 Aug 2021</p>
          </div>
          <div className='flex flex-col justify-start gap-1'>
            <span className='text-sm text-stone-500'>Bill To</span>
            <p className='text-md text-foreground'>Alex Grim</p>
          </div>
          <div className='flex flex-col justify-start gap-1'>
            <span className='text-sm text-stone-500'>Sent to</span>
            <p className='text-md text-foreground'>alexgrim@mail.com</p>
          </div>
        </div>
        <div className='grid grid-cols-[0.5fr_1fr] items-center my-4'>
          <div className='flex flex-col justify-start gap-1'>
            <span className='text-sm text-stone-500'>Payment Due</span>
            <p className='text-md text-foreground'>20 Sep 2021</p>
          </div>
          <div className='flex flex-col items-start'>
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>QTY.</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className='flex items-center justify-end'>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow>
                <TableCell>Banner Design</TableCell>
                <TableCell>2</TableCell>
                <TableCell>£ 156.00</TableCell>
                <TableCell className='flex items-end justify-end'>£ 156.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Banner Design</TableCell>
                <TableCell>2</TableCell>
                <TableCell>£ 156.00</TableCell>
                <TableCell className='flex items-end justify-end'>£ 156.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Amount Due</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
        </Table>
      </div>
    </div>
  )
}