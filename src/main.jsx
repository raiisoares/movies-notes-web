import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home";
import { MoviePreview } from "./pages/MoviePreview";
import { Profile } from "./pages/Profile";
import { CreateMovie } from "./pages/CreateMovie";
import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import GlobalStyles from "./styles/global"
import theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <MoviePreview user={"Raí Soares"}  created_at={"23/05/22 às 08:00"}/>
    </ThemeProvider>
  </React.StrictMode>,
)
