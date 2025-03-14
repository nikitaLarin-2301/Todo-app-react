import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './app.tsx'
import {ThemeProvider} from '@emotion/react'
import {CssBaseline} from '@mui/material'
import {theme} from './theme.ts'
import {TaskProvider} from './contexts/task-provider.tsx'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TaskProvider>
        <App />
      </TaskProvider>
    </ThemeProvider>
  </StrictMode>,
)
