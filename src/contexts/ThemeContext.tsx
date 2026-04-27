"use client"

import {createContext, useContext, useState, ReactNode} from "react"
import { themes, Theme} from "@/config/themes"

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    styles: (typeof themes)[Theme];
};


const ThemeContext = createContext({} as ThemeContextType);

type Props = {
    children: ReactNode;
};

export function ThemeProvider ({children}: Props) {
    const [theme, setTheme] = useState<Theme>("dark");

    return (
        <ThemeContext.Provider
        value={{
            theme,
            setTheme,
            styles: themes[theme]
        }}
    >
        {children}
    </ThemeContext.Provider>
    )
}
export function useTheme() {
    return useContext(ThemeContext);
}
