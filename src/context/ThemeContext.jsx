import { createContext, useContext } from 'react'
import useDarkMode from '../hooks/useDarkMode'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode()

  return (
    <ThemeContext.Provider value={darkMode}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)