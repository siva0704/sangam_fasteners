import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeProviderContext = createContext<ThemeProviderState>({
    theme: "dark",
    toggleTheme: () => null,
})

export function ThemeProvider({
    children,
    ...props
}: ThemeProviderProps) {
    const theme: Theme = "dark"

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
    }, [theme])

    const toggleTheme = () => {
        // No-op as light theme is removed
        console.log("Theme switching is disabled.")
    }

    return (
        <ThemeProviderContext.Provider {...props} value={{ theme, toggleTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")
    return context
}
