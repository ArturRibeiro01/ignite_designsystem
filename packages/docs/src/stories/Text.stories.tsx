import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograpy/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellat corrupti impedit, quidem enim culpa hic officia ad distinctio saepe?',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'md',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomText: StoryObj<TextProps> = {
  args: {
    children: 'Custom Text',
    as: 'strong',
  },
}
