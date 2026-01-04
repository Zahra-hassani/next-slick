"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    mainColor: string,
    secondary: string
  }
}

const defaultTheme:Theme = {
  colors: {
    mainColor: "#fff",
    secondary: "#34bc24"
  }
}


const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({children}:{children: React.ReactNode})=>{
    return (
    <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext);