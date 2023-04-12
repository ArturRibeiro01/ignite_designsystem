import type { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typograpy/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por Padrão o Heading sempre será um `h2` , mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
