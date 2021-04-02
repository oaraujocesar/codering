import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, NextJs e Styled Components'
}) => {
  const { dispatch } = useContext(ThemeContext)

  const toggleTheme = () => {
    dispatch({ type: 'toggleTheme' })
  }

  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor de software de frente para uma tela com códigos"
      />
      <button onClick={toggleTheme}>Change Theme</button>
    </S.Wrapper>
  )
}

export default Main
