import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import { Routes } from './routes';
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"
import { MyContext } from './myContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{ name: "rai", email: "rai@email.com" }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode >,
)
