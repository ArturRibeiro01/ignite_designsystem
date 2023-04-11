import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  padding: '$4',
})

export interface TextProps extends ComponentProps<typeof Text> {}
