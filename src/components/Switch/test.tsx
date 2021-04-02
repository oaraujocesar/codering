import { render, screen } from '@testing-library/react'

import { theme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Switch from '.'

describe('<Switch />', () => {
  it('Should render dark colors correctly', async () => {
    const { container } = render(
      <ThemeProvider theme={theme.dark}>
        <Switch />
      </ThemeProvider>
    )

    expect(container.firstElementChild).toHaveStyleRule(
      'background-color',
      theme.dark.shadeOne
    )
    expect(container.firstElementChild).toMatchSnapshot()
  })

  it('Should render light colors correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme.light}>
        <Switch />
      </ThemeProvider>
    )

    expect(container.firstElementChild).toHaveStyleRule(
      'background-color',
      theme.light.shadeOne
    )
    expect(container.firstElementChild).toMatchSnapshot()
  })

  it('Should render two options', () => {
    render(
      <ThemeProvider theme={theme.dark}>
        <Switch />
      </ThemeProvider>
    )

    expect(screen.queryAllByRole('option')).toHaveLength(2)
  })
})
