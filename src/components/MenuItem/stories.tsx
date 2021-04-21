import { Story, Meta } from '@storybook/react/types-6-0'

import MenuItem from '.'

export default {
  title: 'MenuItem',
  component: MenuItem
} as Meta

export const Basic: Story = (args) => <MenuItem {...args} />
