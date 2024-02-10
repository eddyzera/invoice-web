import React from 'react'

import { RouterProviderApp } from '@/providers/routes'
import { ThemeProvider } from '@/providers/theme/themeProvider'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider storageKey="invoice-theme" defaultTheme="dark">
      <RouterProviderApp />
    </ThemeProvider>
  )
}
