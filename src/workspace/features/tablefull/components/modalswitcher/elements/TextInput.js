import React from 'react'
import styled, { css } from 'styled-components'

export function TextInput() {
	return (
		<>
			<input type="text"/>
		</>
	)
}

export const BaseTextInput = css``

const StyledInput = styled.input`
	${BaseTextInput}
`