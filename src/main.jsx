import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const colors = {
  main: '#101828',
  text: '#475467',
  gray: '#6c717b',
  lightGray: '#dadde1',
  badges: '#f2f4f7',
  stars: '#ffc531',
  inputs: '#f7f7f7',
  white: '#ffffff',
  button: '#e44848',
  hoverButton: '#d84343'
}

const buttons = {
  textTransform: 'none',
  fontSize: 16,
  lineHeight: 1.5,
  padding: 16,
  borderRadius: 200,
}

const inputs = {
  border: 'none',
  padding: '18px',
  borderRadius: 12,
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.5,
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.main,
      contrastText: colors.text,
      gray: colors.gray,
      lightGray: colors.lightGray,
      badges: colors.badges,
      stars: colors.stars,
      inputs: colors.inputs,
      white: colors.white,
      button: colors.button,
      hoverButton: colors.hoverButton,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: buttons.textTransform,
        },
        containedPrimary: {
          backgroundColor: colors.button,
          color: colors.white,
          fontSize: buttons.fontSize,
          lineHeight: buttons.lineHeight,
          padding: buttons.padding,
          borderRadius: buttons.borderRadius,
          '&:hover' : {
            backgroundColor: colors.hoverButton,
          },
          '&:focus' : {
            backgroundColor: colors.hoverButton,
          },
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: colors.inputs,
          border: inputs.border,
          borderRadius: inputs.borderRadius,
          color: colors.main,
          fontWeight: inputs.fontWeight,
          fontSize: inputs.fontSize,
          lineHeight: inputs.lineHeight,
          '&:hover': {
            border: inputs.border,
          },
          '&.Mui-focused': {
            border: inputs.border,
          },
          '& input': {
            padding: inputs.padding,
          },
        }
      }
    },
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
