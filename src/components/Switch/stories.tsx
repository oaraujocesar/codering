import { Story, Meta } from '@storybook/react/types-6-0'
import { theme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Switch from '.'

export default {
  title: 'Theme Switch',
  component: Switch,
  argTypes: {
    currentTheme: { control: { type: 'radio', options: ['light', 'dark'] } }
  }
} as Meta

export const Basic: Story = (args) => {
  const currentTheme = args.currentTheme === 'dark' ? theme.dark : theme.light

  return (
    <ThemeProvider theme={currentTheme}>
      <Switch {...args} />
    </ThemeProvider>
  )
}
