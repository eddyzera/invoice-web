import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const SignIn: React.FunctionComponent = () => {
  return (
    <div className="p-8">
      <Button variant={'ghost'} asChild className="absolute right-4 top-4">
        <Link to="/sign-up">Novo usuario</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe as faturas acessando o painel!
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu password</Label>
            <Input id="password" type="password" />
          </div>
          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-600/90"
            type="submit"
          >
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  )
}
