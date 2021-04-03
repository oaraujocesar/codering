import { useState } from 'react'
import Main from 'components/Main'
import Switch from 'components/Switch'
import Searchbar from 'components/Searchbar'

import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function Home() {
  const { dispatch } = useContext(ThemeContext)

  const toggleTheme = (theme: string) => {
    dispatch({ type: 'updateTheme', value: theme })
  }

  const [search, setSearch] = useState('')

  return (
    <>
      <Searchbar
        value={search}
        change={setSearch}
        placeholder="Digite a tecnologia ou palavras-chave..."
      />
      <Switch action={toggleTheme} />
      <Main />
    </>
  )
}
