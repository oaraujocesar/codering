import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 127px;
  display: flex;
  padding: 4px 11px;
  position: relative;
  border-radius: 20px;
  justify-content: center;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.shadeOne};
`

export const Handler = styled.div<{ checked: boolean }>`
  top: 3px;
  left: 8px;
  z-index: 1;
  width: 45%;
  position: absolute;
  border-radius: 20px;
  background-color: white;
  height: calc(100% - 6px);

  transition: transform 0.3s ease;
  transform: translateX(${(props) => (props.checked ? '0' : '91%')});
`

export const IconWrapper = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
`
