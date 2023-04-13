import React, { ComponentProps } from 'react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'
import { Check } from 'phosphor-react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}
