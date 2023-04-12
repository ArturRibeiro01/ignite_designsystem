import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograpy/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat corrupti impedit, quidem enim culpa hic officia ad distinctio saepe?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomText: StoryObj<TextProps> = {
  args: {
    children: 'Custom Text',
    as: 'strong',
  },
}
