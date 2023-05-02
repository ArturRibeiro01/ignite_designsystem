import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  border: '2px solid $ignite300',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },
})

const SlideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})

const SlideOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-100%)' },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$5',
  height: '$5',

  '&[data-state="checked"]': {
    animation: `${SlideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${SlideOut} 200ms ease-out`,
  },
})
