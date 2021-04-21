import { useState } from 'react'
import styled from 'styled-components'

import Main from 'components/Main'
import Switch from 'components/Switch'
import Searchbar from 'components/Searchbar'

import { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { Container } from '../styles/global'

const Controls = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default function Home() {
  const { dispatch } = useContext(ThemeContext)

  const toggleTheme = (theme: string) => {
    dispatch({ type: 'updateTheme', value: theme })
  }

  const [search, setSearch] = useState('')

  return (
    <Container>
      <Controls>
        <Searchbar
          value={search}
          change={setSearch}
          placeholder="Digite a tecnologia ou palavras-chave..."
        />
        <Switch action={toggleTheme} />
      </Controls>
      <Main />
    </Container>
  )
}
