import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 9px 28px;
  border-radius: 20px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.shadeOne};
`

export const Button = styled.button`
  top: 0;
  right: 0;
  border: none;
  height: 100%;
  outline: none;
  display: flex;
  cursor: pointer;
  padding: 4px 20px;
  position: absolute;
  align-items: center;
  border-radius: 0 20px 20px 0;
  background: ${(props) => props.theme.primaryColor};

  &:hover {
    filter: brightness(0.9);
  }
`
