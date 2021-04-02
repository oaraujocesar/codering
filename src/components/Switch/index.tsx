import { useState } from 'react'

import SunIcon from '../Icons/Sun'
import MoonIcon from '../Icons/Moon'

import * as S from './styles'

interface IProps {
  action?(theme: string): void
}

const Switch = ({ action }: IProps) => {
  const [checked, setChecked] = useState(true)

  const toggleSwitch = (position: boolean) => setChecked(position)

  return (
    <S.Wrapper>
      <S.IconWrapper
        role="option"
        onClick={() => {
          toggleSwitch(true)
          action && action('dark')
        }}
      >
        <MoonIcon fill={checked ? '#D6AD45' : '#707070'} />
      </S.IconWrapper>

      <S.IconWrapper
        role="option"
        onClick={() => {
          toggleSwitch(false)
          action && action('light')
        }}
      >
        <SunIcon fill={checked ? '#707070' : '#D6AD45'} />
      </S.IconWrapper>

      <S.Handler role="theme-indicator" checked={checked} />
    </S.Wrapper>
  )
}

export default Switch
