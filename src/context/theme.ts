import { createContext } from 'react'

interface IThemeContextProps {
  dispatch: ({ type }: { type: string; value: string }) => void
}

export const ThemeContext = createContext({} as IThemeContextProps)
