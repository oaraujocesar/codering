import styled from 'styled-components'

export const Wrapper = styled.aside`
  top: 0;
  left: 0;
  z-index: 20;
  height: 100vh;
  padding: 40px 0;
  position: sticky;
  background: ${(props) => props.theme.menu};
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.16);

  svg.logo {
    padding: 0 39.5px;
    margin-bottom: 50px;
  }
`

export const LogoLink = styled.a`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const SocialMedia = styled.div`
  margin-top: 24.6rem;
  text-align: center;

  p {
    font-size: 2.2rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.menuItem};
  }
`

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;

  li {
    width: 32px;
    height: 32px;
    margin: 0 6px;
  }
`

export const SocialLink = styled.a`
  cursor: pointer;
  height: 100%;
  display: block;

  &:hover {
    svg path:first-child,
    svg path.github {
      fill: ${(props) => props.theme.primaryColor};
    }
  }
`
