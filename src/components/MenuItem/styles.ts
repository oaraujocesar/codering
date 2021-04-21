import styled, { css } from 'styled-components'

const complexMixin = css`
  background: ${(props) => props.theme.menuBackground};
  &::before {
    opacity: 1;
  }
`

export const Wrapper = styled.li<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  position: relative;
  min-height: 80px;

  margin-bottom: 8px;
  border-top: 1.5px solid ${(props) => props.theme.separators};
  border-bottom: 1.5px solid ${(props) => props.theme.separators};

  &:hover {
    background: ${(props) => props.theme.menuBackground};
    &::before {
      opacity: 1;
    }
  }

  &::before {
    top: -2px;
    opacity: 0;
    content: '';
    width: 10px;
    height: 80px;
    background: ${(props) => props.theme.primaryColor};
    position: absolute;
  }

  ${(props) => (props.isActive ? complexMixin : '')}

  a {
    width: 100%;
    display: inherit;
    padding: 18px 50px;
    align-items: center;

    font-size: 2.4rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.menuItem};

    img {
      margin-right: 20px;
    }
  }
`
