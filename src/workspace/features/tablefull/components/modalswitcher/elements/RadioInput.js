import React from 'react'
import styled, { css } from 'styled-components'

export function RadioInput() {
	return (
		<>
			<input type="radio"/>
		</>
	)
}

export const BaseRadioInput = css``

const StyledInput = styled.input`
	${BaseRadioInput}
`