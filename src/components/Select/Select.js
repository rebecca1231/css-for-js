import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <SelectElement value={value} onChange={onChange}>
      {children}
    </SelectElement>
  )
}

const SelectElement = styled.select`
  border-radius: 8px;
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  min-width: 190px;
  border: none;
  &:hover{
    color: #000;
  }
  &:focus{
    outline: 2px solid #4374CB;

  }
`

export default Select
