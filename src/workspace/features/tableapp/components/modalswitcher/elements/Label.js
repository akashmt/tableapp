import React from 'react'
import styled, { css } from 'styled-components'

export const Label = ({ children }) => {
	return (
		<StyledLabel>
			{children}
		</StyledLabel>
	)
}

export const BaseLabel = css``

const StyledLabel = styled.label`
  ${BaseLabel}
`