import React from 'react'
import styled, { css } from 'styled-components'

export const Fieldset = ({ children }) => {
	return (
		<StyledFieldset>
			{children}
		</StyledFieldset>
	)
}

export const BaseFieldset = css``

const StyledFieldset = styled.fieldset`
	${BaseFieldset}
`	