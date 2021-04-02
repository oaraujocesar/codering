import { theme } from '../styles/theme'

export const initialState = {
  currentTheme: theme.dark
}

export function reducer(state, action) {
  switch (action.type) {
    case 'setTheme':
      return { ...state, currentTheme: action.value }
    case 'updateTheme':
      return {
        ...state,
        currentTheme: { ...theme[state.currentTheme.id], ...action.value }
      }
    case 'toggleTheme': {
      const newThemeKey = state.currentTheme.id === 'dark' ? 'light' : 'dark'
      return { ...state, currentTheme: theme[newThemeKey] }
    }
    default:
      throw new Error()
  }
}
