import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <Displayed>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id='chevron-down' strokeWidth={1} size={24}></Icon>
        </IconWrapper>
      </Displayed>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`
const SelectElement = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`
const Displayed = styled.div`
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  ${SelectElement}:focus + & {
    outline: 1px dotted #121212;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectElement}:hover + & {
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
`

export default Select
