import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}
