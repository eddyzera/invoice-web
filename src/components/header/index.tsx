import { Landmark } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/providers/theme/themeToggle'

export const Header: React.FunctionComponent = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 p-6">
        <Landmark className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <h1 className='text-muted-foreground'>Invoice Web</h1>
        <div className="flex-1 justify-end w-full flex items-center gap-3">
          <ThemeToggle />
          <Button>New Invoice</Button>
        </div>
      </div>
    </header>
  )
}
