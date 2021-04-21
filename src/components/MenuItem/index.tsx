import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MenuItem = ({ label = 'Home', path = '/', icon = 'home' }) => {
  const { asPath } = useRouter()

  return (
    <S.Wrapper isActive={asPath === path}>
      <Link href={path}>
        <a>
          <img src={`/img/${icon}.svg`} />
          {label}
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default MenuItem
