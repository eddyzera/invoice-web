import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const SignUp: React.FunctionComponent = () => {
  return (
    <div className="p-8">
      <Button variant={'ghost'} asChild className="absolute right-4 top-4">
        <Link to="/sign-in">Fazer login</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta gratis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas !
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input id="restaurantName" type="text " />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" />
          </div>
          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-600/90"
            type="submit"
          >
            Finalizar cadastro
          </Button>
          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com os nossos{' '}
            <a
              href="#"
              className="underline underline-offset-4 text-indigo-600"
            >
              termos de serviço
            </a>{' '}
            e{' '}
            <a
              href="#"
              className="underline underline-offset-4 text-indigo-600"
            >
              politicas de privacidade
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
