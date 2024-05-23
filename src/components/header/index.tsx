import { DollarSign } from 'lucide-react'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeToggle } from '@/provider/theme/themeToggle'

export const Header: React.FunctionComponent = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4 border-b dark:bg-zinc-950">
      <div className="flex items-center">
        <DollarSign className="h-5 w-5 text-indigo-600" />
        <span className="font-semibold">Invoice Web</span>
      </div>
      <div className="flex items-center gap-8">
        <ThemeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
