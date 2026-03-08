import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

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
    defaultTheme = "dark",
    storageKey = "sfl-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
    }, [theme])

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        localStorage.setItem(storageKey, newTheme)
        setTheme(newTheme)
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
