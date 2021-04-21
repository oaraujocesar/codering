import { useTheme } from 'styled-components'
import Link from 'next/link'

import * as S from './styles'
import MenuItem from '../MenuItem'

import LogoIcon from '../Icons/LogoMenu'
import Github from '../Icons/Github'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'

const Menu = () => {
  const theme = useTheme()
  const items = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Sobre', path: '/sobre', icon: 'about' },
    { label: 'Categorias', path: '/categorias', icon: 'category' },
    { label: 'Series', path: '/series', icon: 'series' }
  ]

  const social = [
    {
      path: 'https://github.com/codering',
      icon: (
        <Github
          className="github"
          fill={theme?.id === 'dark' ? '#303030' : '#707070'}
        />
      )
    },
    {
      path: 'http://twitter.com/codering',
      icon: (
        <Twitter
          className="twitter"
          fill={theme?.id === 'dark' ? '#303030' : '#707070'}
        />
      )
    },
    {
      path: 'https://www.instagram.com/codering.io/',
      icon: (
        <Instagram
          className="instagram"
          fill={theme?.id === 'dark' ? '#303030' : '#707070'}
        />
      )
    }
  ]

  return (
    <S.Wrapper>
      <Link href="/">
        <S.LogoLink>
          <LogoIcon className="logo" fill={theme?.shadeTwo} />
        </S.LogoLink>
      </Link>

      <ul>
        {items.map(({ label, path, icon }) => (
          <MenuItem key={label} label={label} path={path} icon={icon} />
        ))}
      </ul>

      <S.SocialMedia>
        <p>Redes sociais</p>
        <S.SocialList>
          {social.map((item, index) => (
            <li key={index}>
              <Link href={item.path} passHref>
                <S.SocialLink target="_blank">{item.icon}</S.SocialLink>
              </Link>
            </li>
          ))}
        </S.SocialList>
      </S.SocialMedia>
    </S.Wrapper>
  )
}

export default Menu
