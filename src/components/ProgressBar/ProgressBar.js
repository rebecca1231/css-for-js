/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  large: {
    height: '20px',
    padding: '4px 2px',
    radius: '8px'
  },
  medium: {
    height: '12px',
    padding: '0px',
    radius: '4px'
  },
  small: {
    height: '8px',
    padding: '0px',
    radius: '4px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]
  return (
    <Wrapper
      height={styles.height}
      padding={styles.padding}
      radius={styles.radius}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper radius={styles.radius}>
        <Bar height={styles.height} value={value}></Bar>
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 370px;
  padding: ${(p) => p.padding};
  border-radius: ${(p) => p.radius};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`
const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => `${p.value}%`};
  height: ${(p) => p.height};
  border-radius: 4px 0 0 4px;
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: ${(p) => p.radius};

`

export default ProgressBar

/*  border-radius: ${(p) =>
p.value < 99
? '4px 0px 0px 4px'
: p.value < 100
? '4px 2px 2px 4px'
: '4px'}; */
