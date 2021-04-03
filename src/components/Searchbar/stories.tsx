import { Story, Meta } from '@storybook/react/types-6-0'

import { theme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Searchbar from '.'

export default {
  title: 'Searchbar',
  component: Searchbar,
  argTypes: {
    currentTheme: { control: { type: 'radio', options: ['light', 'dark'] } }
  }
} as Meta

export const Basic: Story = (args) => {
  const currentTheme = args.currentTheme === 'dark' ? theme.dark : theme.light

  return (
    <ThemeProvider theme={currentTheme}>
      <Searchbar
        placeholder="Digite a tecnologia ou palavras-chave..."
        {...args}
      />
    </ThemeProvider>
  )
}
