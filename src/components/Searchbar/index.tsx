import { ChangeEvent } from 'react'

import { useTheme } from 'styled-components'

import SearchIcon from '../Icons/Search'

import * as S from './styles'

interface ISearch {
  placeholder: string
  value?: string
  change?: (text: string) => void
}

const Searchbar = ({ placeholder, value, change }: ISearch) => {
  const theme = useTheme()

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        name="searchbar"
        id="searchbar"
        value={value}
        autocomplete="off"
        onChange={({ currentTarget }: ChangeEvent<HTMLInputElement>) =>
          change && change(currentTarget.value)
        }
        placeholder={placeholder}
      />
      <S.Button role="search">
        <SearchIcon fill={theme?.backgroundColor} />
      </S.Button>
    </S.Wrapper>
  )
}

export default Searchbar
