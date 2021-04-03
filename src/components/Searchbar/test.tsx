import { render, screen } from '@testing-library/react'

import Searchbar from '.'

describe('<Searchbar />', () => {
  it('Should render the searchbar', () => {
    const { container } = render(
      <Searchbar placeholder="Digite a tecnologia ou palavras-chave..." />
    )

    expect(
      screen.getByPlaceholderText(/Digite a tecnologia ou palavras-chave.../i)
    ).toBeInTheDocument()

    expect(screen.getByRole('search')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
