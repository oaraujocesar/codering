import Main from 'components/Main'
import Switch from 'components/Switch'

import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function Home() {
  const { dispatch } = useContext(ThemeContext)

  const toggleTheme = (theme: string) => {
    dispatch({ type: 'updateTheme', value: theme })
  }

  return (
    <>
      <Switch action={toggleTheme} />
      <Main />
    </>
  )
}
