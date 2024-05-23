import React from 'react'

import { ThemeRouter } from './provider/router'
import { ThemeProvider } from './provider/theme/themeProvider'

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider storageKey="invoice-theme" defaultTheme="dark">
      <ThemeRouter />
    </ThemeProvider>
  )
}
