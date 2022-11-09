import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { primaryTheme } from "./";


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ primaryTheme }>

      <CssBaseline />

      { children }
    </ThemeProvider>
  )
}
